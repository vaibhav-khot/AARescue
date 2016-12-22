import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ValotpPage } from '../valotp/valotp';

/*
  Generated class for the Terms page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }
agree(){
  this.navCtrl.push(ValotpPage);
}
}
