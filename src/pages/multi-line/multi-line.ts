import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Importaciones:
import { IContacts } from '../../models/data-source.model';
import { GetContactsProvider } from '../../providers/get-contacts/get-contacts';

/**
 * Generated class for the MultiLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multi-line',
  templateUrl: 'multi-line.html',
})
export class MultiLinePage {

  //Propiedades:
  contactos: IContacts[];

  // Constructores:
  constructor(public navCtrl: NavController, public navParams: NavParams, public getContactsProvider: GetContactsProvider) {
    this.contactos = this.getContactsProvider.dataS;
  }

  // Métodos:
  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiLinePage');
  }

  itemSelected(item: IContacts) {
    let mensaje = `Cliente: ${item.codigoCliente} seleccionado`;
    this.getContactsProvider.showToast('middle', mensaje);
  }

}
