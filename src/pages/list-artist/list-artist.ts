import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpotifyProvider } from '../../providers/spotify/spotify';
import { ArtistPage } from '../artist/artist';

/**
 * Generated class for the ListArtistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-artist',
  templateUrl: 'list-artist.html',
})
export class ListArtistPage {

  public aritstList:Array<any>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public spotify: SpotifyProvider) {
    this.aritstList = this.navParams.get('artist');
    console.log(this.aritstList)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListArtistPage');
  }

  choosenArtist(artist:string){
    this.spotify.searchArist(artist)
      .subscribe(res =>{
        console.log(res)
        //let results = res.results.artistmatches;
        let results = new Object();
        results['results'] = res
         this.navCtrl.push(ArtistPage, results);
      })

  }




}
