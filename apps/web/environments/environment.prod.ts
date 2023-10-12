import version from '../../../package.json';
//const { version } = require('../../../package.json');

export const environment = {
  production: true,
  appVersion: `${version}-dev`,

  api_url: 'http://localhost:3333/api',
  api_prefix: '/',

  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'PfH5QXM0cZ',
      refreshTokenKey: 'ykvUfOCJU9',
    },
  },
};
