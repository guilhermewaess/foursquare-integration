import axios from 'axios';
import foursquareConf from './../../foursquare.conf';

const geoLocationOptions = {
  enableHighAccuracy: true,
  timeout: 3000,
  maximumAge: 0,
};

function getLocation() {
  const defaultLocation = {
    coords: {
      latitude: '52.3702',
      longitude: '4.8952',
    },
  };
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      () => {
        resolve(defaultLocation);
      },
      geoLocationOptions,
    );
  });
}

export default async function search({ query, section, openNow }) {
  const location = await getLocation();
  const params = {
    query,
    section,
    openNow: openNow ? 1 : 0,
    ll: `${location.coords.latitude},${location.coords.longitude}`,
    client_id: foursquareConf.clientId,
    client_secret: foursquareConf.clientSecret,
    v: '20180801',
    locale: 'en',
  };
  return axios
    .get('https://api.foursquare.com/v2/venues/explore', {
      params,
    })
    .then(response => response.data.response);
}
