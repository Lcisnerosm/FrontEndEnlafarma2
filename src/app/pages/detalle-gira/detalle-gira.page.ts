import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-detalle-gira',
  templateUrl: './detalle-gira.page.html',
  styleUrls: ['./detalle-gira.page.scss'],
})
export class DetalleGiraPage implements OnInit {
  
  constructor(private customerServices: CustomersService,
    private activateRouiter: ActivatedRoute) { }

  customer: any
  data: any
  idParams: any = `/crear-costumer/${this.activateRouiter.snapshot.params.id}` 
  async ngOnInit() {
    this.customer = await this.customerServices.getCustomerBranch(this.activateRouiter.snapshot.params.id)
    console.log(this.customer.data)
    this.data = this.customer.data
  }

  doRefresh(evento){
    console.log('jollaldjf')
  }

}


