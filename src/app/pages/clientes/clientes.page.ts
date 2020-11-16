import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(private customerServices: CustomersService,
              private activateRouiter: ActivatedRoute) { }

  Customer: any
  data: any = {}

  async ngOnInit() {
    this.Customer = await this.customerServices.getCustomerId(this.activateRouiter.snapshot.params.id)
    this.data = this.Customer.data
    console.log(this.data)
  }

}

interface customer {
  address: string;
  contact: string
  idcustomer: number
  name: string
  nit: number
  phone: string
}
