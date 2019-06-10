import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

@Component({
  selector: 'page-texttab',
  templateUrl: 'texttab.html'
})
export class TextTabPage {
    isAndroid: boolean = false;

    constructor(public navCtrl: NavController, platform: Platform) {
        this.isAndroid = platform.is('android');
    }

}

export class BasicPage {
    rootPage = TextTabPage;
}