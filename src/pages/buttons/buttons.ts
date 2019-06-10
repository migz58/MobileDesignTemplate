import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomButtonsPage } from '../buttons/custombuttons/custombuttons';
import { IonicButtonsPage } from '../buttons/ionicbuttons/ionicbuttons';
import { ComponentButtonsPage } from '../buttons/componentButtons/componentButtons';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  constructor(public navCtrl: NavController) {

  }

  goToCustomBtns() {
    this.navCtrl.push(CustomButtonsPage);
  }

  goToIonicBtns() {
    this.navCtrl.push(IonicButtonsPage);
  }

  goToComponentBtns() {
    this.navCtrl.push(ComponentButtonsPage);
  }

}
