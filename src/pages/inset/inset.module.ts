import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsetPage } from './inset';

@NgModule({
  declarations: [
    InsetPage,
  ],
  imports: [
    IonicPageModule.forChild(InsetPage),
  ],
})
export class InsetPageModule {}
