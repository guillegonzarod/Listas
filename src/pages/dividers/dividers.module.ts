import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DividersPage } from './dividers';

@NgModule({
  declarations: [
    DividersPage,
  ],
  imports: [
    IonicPageModule.forChild(DividersPage),
  ],
})
export class DividersPageModule {}
