import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the BillboardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SpotifyProvider {
  private clientId: string;
  private clientSecretyKey: string;
  private tokenUrl: string;
  private searchUrl:string;
  private search:string

  constructor(public _http: Http) {
    console.log('Hello SpotifyProvider Provider');
    this.clientId = "6071a4a675bc70c6098c0be3a60c0dc0";

  }

  searchMusic(search:string){
    this.tokenUrl = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + search +"&api_key=" + this.clientId +"&limit=10&format=json"
    return this._http.get(this.tokenUrl)
        .map(res => res.json());
  }

  searchArist(id:string){
    const urlInfo = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=" + id +"&api_key=" + this.clientId +"&format=json",
          urlTopTracks = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=" + id +"&api_key=" + this.clientId +"&format=json",
          urlTopAlbums = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=" + id +"&api_key=" + this.clientId +"&format=json";

        return  Observable.forkJoin(
            this._http.get(urlInfo).map(res =>res.json()),
            this._http.get(urlTopTracks).map(res =>res.json()),
            this._http.get(urlTopAlbums).map(res =>res.json())
          )
  }

  searchSimilar(id:string){
    const urlInfo = "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&mbid=" + id +"&api_key=" + this.clientId +"&format=json";
      return this._http.get(urlInfo)
        .map(res => res.json());

  }
}
