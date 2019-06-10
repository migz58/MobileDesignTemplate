import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {
  testRadioOpen: boolean;
  testRadioResult;

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(
    public navCtrl: NavController,
    public alerCtrl: AlertController
  ) { }

  doBasicAlert(){
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just accepted your friend request.... JK your not strong enough with the force! LOSER!!',
      buttons: ['OK']
    });
    alert.present()
  }

  doPrompt() {
    let prompt = this.alerCtrl.create({
      title: 'Do Your Part!',
      message: "Enter a name for who this app shall put to death... Dont think it works? Just ask Elvis",
      inputs: [
        {
          name: 'title',
          placeholder: 'Do it!!!!'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked..... Pussy');
          }
        },
        {
          text: 'Execute',
          handler: data => {
            console.log('Good Job, they deserved it ;)');
          }
        }
      ]
    });
    prompt.present()
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?.... Also to slice and toast your bread?',
      buttons: [
        {
          text: 'Hell No',
          handler: data => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Fuck Yes',
          handler: data => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'blue'
    });

    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'Yellow',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'Purple',
      value: 'purple'
    });

    alert.addInput({
      type: 'radio',
      label: 'White',
      value: 'white'
    });

    alert.addInput({
      type: 'radio',
      label: 'Black',
      value: 'black'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Lightsaber color:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  doCheckbox() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Coruscant',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Endor',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Hoth',
      value: 'value5'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Jakku',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Naboo',
      value: 'value7'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Takodana',
      value: 'value8'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'value9'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Planets visited:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }
}