import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HistorialService } from "../../services/historial.service";
import { SalesByCustomer } from "../../models/sales.model";

@Component({
  selector: "app-historial-productos",
  templateUrl: "./historial-productos.page.html",
  styleUrls: ["./historial-productos.page.scss"],
})
export class HistorialProductosPage implements OnInit {
  constructor(
    private hisService: HistorialService,
    private activateRouiter: ActivatedRoute
  ) {}
  idParams: any = `/historial-productos/${this.activateRouiter.snapshot.params.id}`;
  sales: SalesByCustomer[] = [];
  ngOnInit() {
    this.getHistoryByCustomer();
  }

  getHistoryByCustomer() {
    // console.log(this.activateRouiter.snapshot.params.id);

    try {
      this.hisService
        .getHistoryByCustomer(this.activateRouiter.snapshot.params.id)
        .then((data) => {
          this.sales = data["data"];
        });
    } catch (error) {
      console.log(error);
    }
  }
}
