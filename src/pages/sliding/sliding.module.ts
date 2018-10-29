import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidingPage } from './sliding';

@NgModule({
  declarations: [
    SlidingPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidingPage),
  ],
})
export class SlidingPageModule {}
