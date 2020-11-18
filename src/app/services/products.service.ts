import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
              private storage: Storage) { }

  psotSales(data:any) {
    console.log('services',data)
    return new Promise(async resolve=> {
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.post(`https://backendenlafarma.herokuapp.com/api/sales`,data, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }

  getProducts() {
    return new Promise(async resolve=> {
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.get(`https://backendenlafarma.herokuapp.com/api/products`, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }
}
