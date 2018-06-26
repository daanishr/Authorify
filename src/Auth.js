import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'authorify7.auth0.com',
    clientID: 'Lln2Uv6bjLaeJaCWg09BMxxMK9QDuSsb',
    redirectUri: 'http://localhost:3002/callback',
    audience: 'https://authorify7.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  // login() {
  //   this.auth0.authorize();
  // }
}