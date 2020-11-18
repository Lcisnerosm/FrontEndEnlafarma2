import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient,
              private storage: Storage) { }


  getHistoryByCustomer(idCustomer) {
    return new Promise(async resolve=> {
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.get(`https://backendenlafarma.herokuapp.com/api/customers/sale/${idCustomer}`, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }
}
