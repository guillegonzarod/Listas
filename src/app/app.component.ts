import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
import { MultiLinePage } from './../pages/multi-line/multi-line';
import { SlidingPage } from '../pages/sliding/sliding';
import { ThumbnailPage } from '../pages/thumbnail/thumbnail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // 1. Elementos del 'sidemenu':
      { title: 'Basic', component: BasicPage },
      { title: 'Inset', component: InsetPage },
      { title: 'Dividers', component: DividersPage },
      { title: 'Headers', component: HeadersPage },
      { title: 'Icon', component: IconPage },
      { title: 'Avatar', component: AvatarPage },
      { title: 'Multi-line', component: MultiLinePage },
      { title: 'Sliding', component: SlidingPage },
      { title: 'Thumbnail', component: ThumbnailPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
