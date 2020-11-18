import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.page.html",
  styleUrls: ["./pedidos.page.scss"],
})
export class PedidosPage implements OnInit {
  constructor(private productService: ProductsService) {}
  product: Product[] = []
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // console.log(this.activateRouiter.snapshot.params.id);

    try {
      this.productService.getProducts().then((data) => {
        this.product = data['data']
        console.log(this.product)
      });
    } catch (error) {
      console.log(error);
    }
  }
}

class Product {
  idproduct: string;
  name: string;
}
