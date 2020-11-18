import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { environment } from "src/environments/environment";
const URL = environment.URL;
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  token: string = null;
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  login(email: string, password: string) {
    const data = { email, password };

    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
      });

      this.http
        .post(`${URL}login`, data, { headers })
        .subscribe((resp: response) => {
          if (resp.ok) {
            this.guardarToken(resp.data.token, resp.data.email);
            resolve(true);
          } else {
            (this.token = null), this.storage.clear();
            resolve(false);
          }
        }, err =>{
          reject(err)
        });
    });
  }

  async guardarToken(token: string, email) {
    console.log("token", token);
    this.token = token;
    await this.storage.set("token", token);
    await this.storage.set("email", email);
  }

  async cargarToken() {
    this.token = (await this.storage.get("token")) || null;
  }

  async validaToken(): Promise<boolean> {
    await this.cargarToken();

    if (!this.token) {
      this.navCtrl.navigateRoot("/login");
      return Promise.resolve(false);
    }

    return new Promise((resolve) => {
      if (this.token) {
        resolve(true);
      } else {
        this.navCtrl.navigateRoot("/login");
        resolve(false);
      }
    });
  }
}

interface response {
  data: {
    email: string;
    rol: string;
    token: string;
  };
  ok: boolean;
}
