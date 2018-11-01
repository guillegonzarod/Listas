import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importaciones:
import { GetContactsProvider } from './../../providers/get-contacts/get-contacts';
import { IContacts, IGroupContacts } from './../../models/data-source.model';

/**
 * Generated class for the HeadersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-headers',
  templateUrl: 'headers.html',
})
export class HeadersPage {

  //Propiedades:
  contactos: IContacts[];
  gruposContactosCRM: IGroupContacts[];

  // Constructores:
  constructor(public navCtrl: NavController, public navParams: NavParams, public getContactsProvider: GetContactsProvider) {
    this.contactos = this.getContactsProvider.dataS;
    this.gruposContactosCRM = this.getContactsProvider.getContactsGroupedByCRM(this.contactos);
  }

  // Métodos:
  ionViewDidLoad() {
    console.log('ionViewDidLoad HeadersPage');
  }

  itemSelected(item: IContacts) {
    let mensaje = `Cliente: ${item.codigoCliente} seleccionado`;
    this.getContactsProvider.showToast('middle', mensaje);
  }

}
