import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextTabPage } from '../tabs/texttab/texttab';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  constructor(public navCtrl: NavController) {

  }

  goToTextTab() {
    this.navCtrl.push(TextTabPage);
  }

}
