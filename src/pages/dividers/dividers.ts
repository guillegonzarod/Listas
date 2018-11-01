import { IGroupContacts } from './../../models/data-source.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importaciones:
import { IContacts } from '../../models/data-source.model';
import { GetContactsProvider } from '../../providers/get-contacts/get-contacts';

/**
 * Generated class for the DividersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dividers',
  templateUrl: 'dividers.html',
})
export class DividersPage {

  //Propiedades:
  contactos: IContacts[];
  contactosAgrupados: IGroupContacts[];
  
  // Constructores:
  constructor(public navCtrl: NavController, public navParams: NavParams, public getContactsProvider: GetContactsProvider) {
    this.contactos = this.getContactsProvider.dataS;
    this.contactosAgrupados = this.getContactsProvider.getGroupedContacts(this.contactos);

  }

  // Métodos:
  ionViewDidLoad() {
    console.log('ionViewDidLoad DividersPage');
  }

  itemSelected(item: IContacts) {
    let mensaje = `Cliente: ${item.codigoCliente} seleccionado`;
    this.getContactsProvider.showToast('middle', mensaje);
  }

}
