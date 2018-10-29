import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Páginas:
import { HomePage } from '../pages/home/home';
import { BasicPage } from '../pages/basic/basic';
import { InsetPage } from '../pages/inset/inset';
import { DividersPage } from '../pages/dividers/dividers';
import { HeadersPage } from '../pages/headers/headers';
import { IconPage } from '../pages/icon/icon';
import { AvatarPage } from '../pages/avatar/avatar';
import { MultiLinePage } from '../pages/multi-line/multi-line';
import { SlidingPage } from '../pages/sliding/sliding';
import { ThumbnailPage } from '../pages/thumbnail/thumbnail';

@NgModule({
  declarations: [
    MyApp,
    // Páginas:
    HomePage,
    BasicPage,
    InsetPage,
    DividersPage,
    HeadersPage,
    IconPage,
    AvatarPage,
    MultiLinePage,
    SlidingPage,
    ThumbnailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BasicPage,
    InsetPage,
    DividersPage,
    HeadersPage,
    IconPage,
    AvatarPage,
    MultiLinePage,
    SlidingPage,
    ThumbnailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
