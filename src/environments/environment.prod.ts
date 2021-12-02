import pkg from '../../package.json';

export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080',
  VERSION: pkg.version,
  googleApiKey: 'AIzaSyDJ5XNovinm1mcUQ3KclqJG742XkHmmP_A',
  googleFindPlaceApiUrl: 'https://maps.googleapis.com/maps/api/place/textsearch/'
};