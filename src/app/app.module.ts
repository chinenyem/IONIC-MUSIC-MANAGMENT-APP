import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MenuePage } from '../pages/menue/menue';
import { ProfilePage } from '../pages/profile/profile';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HelpPage } from '../pages/help/help';
import { ListArtistPage } from '../pages/list-artist/list-artist';
import { ArtistPage } from '../pages/artist/artist';
import { SimilarArtistPage } from '../pages/similar-artist/similar-artist';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { OAuthService } from 'angular-oauth2-oidc';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { SpotifyProvider } from '../providers/spotify/spotify';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuePage,
    ProfilePage,
    DashboardPage,
    HelpPage,
    ListArtistPage,
    ArtistPage,
    SimilarArtistPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuePage,
    ProfilePage,
    DashboardPage,
    HelpPage,
    ListArtistPage,
    ArtistPage,
    SimilarArtistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OAuthService,
    LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    SpotifyProvider
  ]
})
export class AppModule {}
