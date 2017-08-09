import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuePage } from './menue';

@NgModule({
  declarations: [
    MenuePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuePage),
  ],
  exports: [
    MenuePage
  ]
})
export class MenuePageModule {}
