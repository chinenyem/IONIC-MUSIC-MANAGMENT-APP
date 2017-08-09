import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimilarArtistPage } from '../similar-artist/similar-artist';
import { SpotifyProvider } from '../../providers/spotify/spotify';

/**
 * Generated class for the ArtistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-artist',
  templateUrl: 'artist.html',
})
export class ArtistPage {

  public aritstInfo:any;
  public artistStats:any;
  public artistTrack:any;
  public artistAlbum:any;
  public artist:any;
  public artistName:string;
  public artistPic:string;
  public isBool:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public spotify:SpotifyProvider) {
    this.isBool = false;
    this.artist = this.navParams.get("results");
    this.artistName = this.artist[0]['artist']['name'];
    this.artistPic = this.artist[0]['artist']['image'][2]['#text'];
    this.aritstInfo = this.artist[0]['artist']['bio'];
    this.artistStats = this.artist[0]['stats'];
    this.artistTrack = this.artist[1]['toptracks']['track'].slice(0,16);
    this.artistAlbum = this.artist[2]['topalbums']['album'].slice(0,16)

    //this.artistTrack = this.navParams.get(data[1]);
    //this.artistAlbum = this.navParams.get(data[2])
    //console.log(this.aritstInfo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistPage');
  }

  similarArtist(id:string){
    this.spotify.searchSimilar(this.artist[0]['artist']['mbid'])
      .subscribe(res =>{

         let results = new Object();
         results['result'] = res.similarartists;
         console.log(results)
         this.navCtrl.push(SimilarArtistPage, results);
      })
  }

}
