import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ButtonsPage,
    ComponentButtonsPage,
    AlertsPage,
    ActionSheetPage,
    CardsPage,
    DateTimePage,
    IconsPage,
    InputsPage,
    CustomCardPage,
    DefaultCardsPage,
    TabsPage,
    TextTabPage,
    LoadingPage,
    CustomButtonsPage,
    IonicButtonsPage,
    ModalsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ButtonsPage,
    ComponentButtonsPage,
    AlertsPage,
    ActionSheetPage,
    CardsPage,
    DateTimePage,
    IconsPage,
    InputsPage,
    CustomCardPage,
    DefaultCardsPage,
    TabsPage,
    TextTabPage,
    LoadingPage,
    CustomButtonsPage,
    IonicButtonsPage,
    ModalsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
