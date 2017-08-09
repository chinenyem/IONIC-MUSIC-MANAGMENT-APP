import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OAuthService } from 'angular-oauth2-oidc';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MenuePage } from '../pages/menue/menue';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: Array<any>
  authorized: any;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              oauthService:OAuthService,
              menu: MenuController
              ) {
    menu.enable(true);
    if(oauthService.hasValidIdToken()){
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
      this.authorized = false;
    }

    this.pages = [
      {"title": "Home", "component": HomePage, 'icon': "icon-format-align-justify" },
      {"title": "Contact", "component": ContactPage, 'icon': "icon-format-line-spacing" },
      {"title": "Profile", "component": ProfilePage, 'icon': "icon-format-align-justify" },
      {"title": "Dashboard", "component": DashboardPage, 'icon': "icon-format-line-spacing"},
      {"title": "Help", "component": HelpPage, 'icon': "icon-format-line-spacing" }
    ]


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      splashScreen.hide();
    });

  }




  openPage(p){
    this.nav.push(p.component);
  }
  logOut(){

  }






}
