import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SimilarArtistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-similar-artist',
  templateUrl: 'similar-artist.html',
})
export class SimilarArtistPage {
  similarArtist:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.similarArtist = this.navParams.get("result");
    console.log(this.similarArtist)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimilarArtistPage');
  }

}
