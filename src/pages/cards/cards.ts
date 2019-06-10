import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DefaultCardsPage } from '../cards/defaultcards/defaultcards';
import { CustomCardPage } from '../cards/customcard/customcard';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController) {

  }

  goToBasicCards() {
    this.navCtrl.push(DefaultCardsPage);
  }

  goToCustomCards() {
    this.navCtrl.push(CustomCardPage);
  }
}
