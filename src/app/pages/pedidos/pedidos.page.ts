import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.page.html",
  styleUrls: ["./pedidos.page.scss"],
})
export class PedidosPage implements OnInit {
  constructor(private productService: ProductsService, 
    private activateRouiter: ActivatedRoute,
    private productos: ProductsService,
    private alertController: AlertController) { }
  product: Product[] = []
  productCarrito: Sales[] = []
  carrito:any
  
  ngOnInit() {
    this.getProducts();
  }

  cantidad: number
  precio: number

  changeCantidad(value: number) {
    this.cantidad = value
  }
  changePrecio(value: number) {
    this.precio = value
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

  getCarrito(idproduct: number, name: string) {

    const sales = {
      customer_idcustomer: this.activateRouiter.snapshot.params.id,
      price: this.precio,
      quantity: this.cantidad,
      total: this.cantidad * this.precio,
      product_idproduct: idproduct
    }
    this.productCarrito.push(sales)

    this.carrito = {
      data: this.productCarrito
    }
  }

  async confirmarPedido() {
    const respuests = await this.productService.psotSales(this.carrito)
    console.log('ts',respuests)
    if (respuests['ok']) {
      this.alertaInformativa('Sea aguardado el confirmar')
    }
    
  }
  async alertaInformativa( message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}

class Product {
  idproduct: string;
  name: string;
}

interface Sales {
  customer_idcustomer: number;
  price: number;
  quantity: number;
  total: number;
  product_idproduct: number;
}
