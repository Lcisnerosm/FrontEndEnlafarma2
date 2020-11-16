import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-crear-costumer',
  templateUrl: './crear-costumer.page.html',
  styleUrls: ['./crear-costumer.page.scss'],
})
export class CrearCostumerPage implements OnInit {

  constructor(private customerServices: CustomersService,
    private navCtrl: NavController,
    private activateRouiter: ActivatedRoute) { }

  cusntomer = {
    name: '',
    address: '',
    nit: '',
    contact: '',
    phone: '',
    branch_idbranch: this.activateRouiter.snapshot.params.id
  }

  ngOnInit() {
  }

  async crearCostumer() {
    const results:any = await this.customerServices.postCustomer(this.cusntomer)
    console.log(results)
    if (results.ok) {
        this.navCtrl.navigateRoot(`/detalle-gira/${this.activateRouiter.snapshot.params.id}`)
    }
  }

}
