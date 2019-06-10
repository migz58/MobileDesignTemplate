import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CustomButtonsPage } from '../pages/buttons/custombuttons/custombuttons';
import { IonicButtonsPage } from '../pages/buttons/ionicbuttons/ionicbuttons';
import { ComponentButtonsPage } from '../pages/buttons/componentButtons/componentButtons';
import { AlertsPage } from '../pages/alerts/alerts';
import { ActionSheetPage } from '../pages/actionSheet/actionSheet';
import { CardsPage } from '../pages/cards/cards';
import { DefaultCardsPage } from '../pages/cards/defaultcards/defaultcards';
import { CustomCardPage } from '../pages/cards/customcard/customcard';
import { DateTimePage } from '../pages/datetime/datetime';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { LoadingPage } from '../pages/loading/loading';
import { TabsPage } from '../pages/tabs/tabs';
import { TextTabPage } from '../pages/tabs/texttab/texttab';
import { ModalsPage } from '../pages/modals/modals';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = ModalsPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage},
      { title: 'Action Sheet', icon: 'magnet', component: ActionSheetPage},
      { title: 'Alerts', icon: 'alert', component: AlertsPage},
      { title: 'Buttons', icon: 'radio-button-off', component: ButtonsPage},
      { title: 'Lists', icon: 'reorder', component: ListPage},
      { title: 'Cards', icon: 'card', component: CardsPage},
      { title: 'Date Time', icon: 'calendar', component: DateTimePage},
      { title: 'Icons', icon: 'apps', component: IconsPage},
      { title: 'Inputs', icon: 'folder-open', component: InputsPage},
      { title: 'Loading', icon: 'sync', component: LoadingPage},
      { title: 'Modals', icon: 'open', component: ModalsPage},
      { title: 'Tabs', icon: 'filing', component: TabsPage},
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
