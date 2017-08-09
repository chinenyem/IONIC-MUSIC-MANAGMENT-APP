import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public loginProvider: LoginProvider) {

  }
  logout(){
    this.loginProvider.logout()
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
  }

}
