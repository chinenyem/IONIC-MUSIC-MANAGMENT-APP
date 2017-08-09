import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimilarArtistPage } from './similar-artist';

@NgModule({
  declarations: [
    SimilarArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(SimilarArtistPage),
  ],
  exports: [
    SimilarArtistPage
  ]
})
export class SimilarArtistPageModule {}
