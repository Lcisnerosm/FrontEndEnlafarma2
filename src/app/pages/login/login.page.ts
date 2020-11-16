import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: 'lcisnerosm@gmail.com',
    password: '123'
  }
  constructor(private usuarioServices: UsuarioService,
              private navCtrl: NavController,
              private uiServices: UiServiceService) { }


  ngOnInit() {
    // this.slides.lockSwipes(false);
  }

  async login(fLogin: NgForm) {

    const valido = await this.usuarioServices.login(this.loginUser.email, this.loginUser.password)
    
    if(valido) {
      //navegar al tabs
      this.navCtrl.navigateRoot('/home', {animated: true})
    }else {
      //mostrar alerta de usuario y contraseña
      this.uiServices.alertaInformativa('Usuario/contraseña no son correctas')

    }
  }

  registro(fregistro: NgForm) {
    console.log(fregistro.valid)
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0)
    this.slides.lockSwipes(true);
  }
  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)
    this.slides.lockSwipes(true);
  }

}
