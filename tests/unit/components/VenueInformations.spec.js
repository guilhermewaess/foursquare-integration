import { shallowMount } from '@vue/test-utils';
import VenueInformations from '@/components/VenueInformations.vue';

describe('VenueInformations', () => {
  let item;
  let component;
  beforeEach(() => {
    item = {
      venue: {
        name: 'Venue',
        location: {
          formattedAddress: ['Aleja Genera 39', '30-001 Kraków', 'Poland'],
        },
      },
    };
    component = shallowMount(VenueInformations, {
      propsData: { item },
      stubs: ['v-layout', 'v-flex'],
    });
  });
  it('should have name', () => {
    expect(component.name()).toEqual('VenueInformations');
  });
  describe('snapshot', () => {
    it('should render', () => {
      expect(component.element).toMatchSnapshot();
    });
  });
  describe('computed', () => {
    it('address should formatted address', () => {
      const expected = item.venue.location.formattedAddress.toString().replace(/,/gi, ', ');
      expect(component.vm.address).toEqual(expected);
    });
    it('venueNameSize should return display-1 if name length is at least 30 ', () => {
      expect(component.vm.venueNameSize).toEqual('display-1');
    });
    it('venueNameSize should return headline if name length more than 30 ', () => {
      item.venue.name = 'VenueWithMoreThan30CharsForTests';
      component.setProps({ item: Object.assign({}, item) });

      expect(component.vm.venueNameSize).toEqual('headline');
    });
  });
});
