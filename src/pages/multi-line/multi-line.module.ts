import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiLinePage } from './multi-line';

@NgModule({
  declarations: [
    MultiLinePage,
  ],
  imports: [
    IonicPageModule.forChild(MultiLinePage),
  ],
})
export class MultiLinePageModule {}
