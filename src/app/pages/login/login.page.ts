import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AlertController, IonSlides, NavController } from "@ionic/angular";
import { UiServiceService } from "src/app/services/ui-service.service";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("slidePrincipal") slides: IonSlides;

  loginUser = {
    email: '',
    password: '',
  };
  constructor(
    private usuarioServices: UsuarioService,
    private navCtrl: NavController,
    private uiServices: UiServiceService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    // this.slides.lockSwipes(false);
  }

  async login(fLogin: NgForm) {
    try {
      const valido = await this.usuarioServices.login(
        this.loginUser.email,
        this.loginUser.password
      );
      console.log(valido)
      if (valido) {
        //navegar al tabs
        this.navCtrl.navigateRoot("/home", { animated: true });
      } else {
        console.log("me ejecuto");
        //mostrar alerta de usuario y contraseña
        // this.uiServices.alertaInformativa('Usuario/contraseña no son correctas')
        
      }
    } catch (error) {
      this.presentAlert(
        "FALLO",
        "Fallo en inicio de sesion",
        "Usuario y contrasena invalidos"
      );
    }
  }

  registro(fregistro: NgForm) {
    console.log(fregistro.valid);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  async presentAlert(Header, Subheader, Message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: Header,
      subHeader: Subheader,
      message: Message,
      buttons: ["OK"],
    });

    await alert.present();
  }
}
