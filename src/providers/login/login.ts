import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: Http, public oauthService: OAuthService) {
    console.log('Hello LoginProvider Provider');
  }

  logout() {
    this.oauthService.logOut();

  }

   givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims.name;
  }

   claims() {
    return this.oauthService.getIdentityClaims();
  }

}
