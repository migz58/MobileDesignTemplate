import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html'
})
export class DateTimePage {

  constructor(public navCtrl: NavController) {}

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}