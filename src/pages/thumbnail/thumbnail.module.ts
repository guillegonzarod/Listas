import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThumbnailPage } from './thumbnail';

@NgModule({
  declarations: [
    ThumbnailPage,
  ],
  imports: [
    IonicPageModule.forChild(ThumbnailPage),
  ],
})
export class ThumbnailPageModule {}
