import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListArtistPage } from './list-artist';

@NgModule({
  declarations: [
    ListArtistPage,
  ],
  imports: [
    IonicPageModule.forChild(ListArtistPage),
  ],
  exports: [
    ListArtistPage
  ]
})
export class ListArtistPageModule {}
