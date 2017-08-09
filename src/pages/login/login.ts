import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
declare const OktaAuth: any;

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private oauthService: OAuthService) {
      oauthService.redirectUri = window.location.origin;
      oauthService.clientId = '0oaazvijxrjJ1Kcwu0h7';
      oauthService.scope = 'openid profile email';
      oauthService.oidc = true;
      oauthService.issuer = 'https://dev-729604.oktapreview.com';
      oauthService.scope = 'openid email profile';

  }

  ionViewDidLoad() : void {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() => {
      this.email.setFocus();
    }, 500)
  }

  login(): void {
      this.oauthService.createAndSaveNonce().then(nonce => {
        const authClient = new OktaAuth({
          clientId: this.oauthService.clientId,
          redirectUri: this.oauthService.redirectUri,
          url: this.oauthService.issuer
        });
        authClient.signIn({
          username: this.username,
          password: this.password
        }).then((response) => {
          if (response.status === 'SUCCESS') {
            authClient.token.getWithoutPrompt({
              nonce: nonce,
              responseType: ['id_token', 'token'],
              sessionToken: response.sessionToken,
              scopes: this.oauthService.scope.split(' ')
            })
              .then((tokens) => {
                // oauthService.processIdToken doesn't set an access token
                // set it manually so oauthService.authorizationHeader() works
                localStorage.setItem('access_token', tokens[1].accessToken);
                this.oauthService.processIdToken(tokens[0].idToken, tokens[1].accessToken);
                console.log(tokens)
                this.navCtrl.push(HomePage);
              })
              .catch(error => console.error(error));
          } else {
            throw new Error('We cannot handle the ' + response.status + ' status');
          }
        }).fail((error) => {
          console.error(error);
          this.error = error.message;
        });
      });
    }

}
