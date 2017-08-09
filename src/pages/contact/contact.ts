import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public loginProvider: LoginProvider) {

  }
  logout(){
    this.loginProvider.logout()
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
  }

}
