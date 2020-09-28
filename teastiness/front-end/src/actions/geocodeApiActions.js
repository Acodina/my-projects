import Geocode from 'react-geocode';
import config from './config';
export async function getLocation(address) {
  let newLocation = null;
  Geocode.setApiKey(config.GOOGLE_KEY);
  Geocode.setLanguage('es');
  Geocode.setRegion('es');
  await Geocode.fromAddress(address).then(
    (response) => {
      newLocation = response.results[0].geometry.location;
    },
    (error) => {
      newLocation = error;
    }
  );
  return newLocation;
}
