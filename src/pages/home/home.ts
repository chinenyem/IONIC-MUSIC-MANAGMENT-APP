import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';
import { SpotifyProvider } from '../../providers/spotify/spotify';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ListArtistPage } from '../list-artist/list-artist';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public givenName: any
  public claims: any
  public searchStr: string


  constructor(public navCtrl: NavController,
              public loginProvider: LoginProvider,
              public menu:MenuController,
              public spotify:SpotifyProvider
              ) {
    menu.enable(true);
    this.givenName = this.loginProvider.givenName();
    this.claims = this.loginProvider.claims();

  }

  logout(){
    this.loginProvider.logout()
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
  }

  SearchArtist(): void {
    console.log(this.searchStr)
    this.spotify.searchMusic(this.searchStr)
      .subscribe(res =>{
        let results = res.results.artistmatches;
         this.navCtrl.push(ListArtistPage, results);
      })
  }






}
