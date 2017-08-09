import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the MenuePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menue',
  templateUrl: 'menue.html',
})
export class MenuePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
     menu.enable(true);
  }

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuePage');
  }

}
