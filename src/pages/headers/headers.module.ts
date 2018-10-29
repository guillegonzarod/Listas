import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadersPage } from './headers';

@NgModule({
  declarations: [
    HeadersPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadersPage),
  ],
})
export class HeadersPageModule {}
