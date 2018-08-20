import axiosStub from 'axios';
import search from './../../../src/services/venues.service';
import foursquareConfMock from './../../../foursquare.conf';

jest.mock('axios');
jest.mock('./../../../foursquare.conf', () => ({
  clientId: 'clientId',
  clientSecret: 'clientSecret',
}));

describe('VenuesService', () => {
  describe('search', () => {
    let apiResponse;
    let filter;
    let mockGeolocation;
    let currentPositionOptionsSpy;
    const helper = {
      createGeoLocationSuccess() {
        return {
          getCurrentPosition: jest.fn().mockImplementation((success, fail, options) => {
            currentPositionOptionsSpy = options;
            return Promise.resolve(success({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            }));
          }),
        };
      },
      createGeoLocationFail() {
        return {
          getCurrentPosition: jest.fn().mockImplementation((success, fail) =>
            Promise.resolve(fail({
              coords: {
                latitude: 51.1,
                longitude: 45.3,
              },
            }))),
        };
      },
      createExpectedApiParams() {
        return {
          query: filter.query,
          section: filter.section,
          openNow: 1,
          ll: '51.1,45.3',
          client_id: foursquareConfMock.clientId,
          client_secret: foursquareConfMock.clientSecret,
          v: '20180801',
          locale: 'en',
        };
      },
    };
    beforeEach(() => {
      filter = {
        query: 'query',
        section: 'food',
        openNow: true,
      };
      apiResponse = { data: { response: 'result' } };
    });
    describe('and user allow location', () => {
      beforeEach(async () => {
        mockGeolocation = helper.createGeoLocationSuccess();
        global.navigator.geolocation = mockGeolocation;
        axiosStub.get.mockResolvedValue(apiResponse);
        await search(filter);
      });
      it('should call getCurrentPosition with correct options', async () => {
        expect(currentPositionOptionsSpy).toEqual({
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        });
      });
      it('should call foursquare api with openNow 1 when it is true', async () => {
        const params = helper.createExpectedApiParams();
        expect(axiosStub.get).toHaveBeenCalledWith('https://api.foursquare.com/v2/venues/explore', {
          params,
        });
      });
      it('should call foursquare api with openNow 0 when it is false', async () => {
        const params = helper.createExpectedApiParams();
        params.openNow = 0;
        axiosStub.mockClear();
        filter.openNow = false;
        axiosStub.get.mockResolvedValue(apiResponse);
        await search(filter);

        expect(axiosStub.get).toHaveBeenCalledWith('https://api.foursquare.com/v2/venues/explore', {
          params,
        });
      });
    });
    describe('and user deny location', () => {
      beforeEach(async () => {
        mockGeolocation = helper.createGeoLocationFail();
        global.navigator.geolocation = mockGeolocation;
        axiosStub.get.mockResolvedValue(apiResponse);
        await search(filter);
      });
      it('should call foursquare api with default location', async () => {
        const params = helper.createExpectedApiParams();
        params.ll = '52.3702,4.8952';
        expect(axiosStub.get).toHaveBeenCalledWith('https://api.foursquare.com/v2/venues/explore', {
          params,
        });
      });
    });
    describe('and server responds with success', () => {
      let result;
      beforeEach(async () => {
        mockGeolocation = helper.createGeoLocationSuccess();
        global.navigator.geolocation = mockGeolocation;
        axiosStub.get.mockResolvedValue(apiResponse);
      });
      it('should return response property of result', async () => {
        result = await search(filter);
        expect(result).toEqual(apiResponse.data.response);
      });
    });
    describe('and server responds with fail', () => {
      beforeEach(async () => {
        mockGeolocation = helper.createGeoLocationSuccess();
        global.navigator.geolocation = mockGeolocation;
        axiosStub.get.mockRejectedValue('Error');
      });
      it('should reject the request', async () => {
        await expect(search(filter)).rejects.toMatch('Error');
      });
    });
  });
});
