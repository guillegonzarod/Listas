import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importaciones:
import { GetContactsProvider } from './../../providers/get-contacts/get-contacts';
import { IContacts } from './../../models/data-source.model';

/**
 * Generated class for the BasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  //Propiedades:
  contactos: IContacts[];

  // Constructores:
  constructor(public navCtrl: NavController, public navParams: NavParams, public getContactsProvider: GetContactsProvider) {
    this.contactos = this.getContactsProvider.dataS;
  }

  // Métodos:
  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage');
  }

  itemSelected(item: IContacts) {
    let mensaje = `Cliente: ${item.codigoCliente} seleccionado`;
    this.getContactsProvider.showToast('middle', mensaje);
  }

}
