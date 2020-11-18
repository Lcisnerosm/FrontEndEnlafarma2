import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from "src/app/services/customers.service";

@Component({
  selector: "app-detalle-gira",
  templateUrl: "./detalle-gira.page.html",
  styleUrls: ["./detalle-gira.page.scss"],
})
export class DetalleGiraPage implements OnInit {
  constructor(
    private customerServices: CustomersService,
    private activateRouiter: ActivatedRoute
  ) {
    this.traerBranch()
  }
  datac: Customer[] = []
  customer: any;
  idParams: any = `/crear-costumer/${this.activateRouiter.snapshot.params.id}`;
  async ngOnInit() {
    this.traerBranch();
  }

  doRefresh(evento) {
    // console.log("jollaldjf");
  }

  traerBranch(){
    this.customerServices
      .getCustomerBranch(this.activateRouiter.snapshot.params.id)
      .then((data) => {
        this.datac = data['data']
      });
  }
}
