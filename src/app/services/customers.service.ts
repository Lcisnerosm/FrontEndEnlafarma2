import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
const URL = environment.URL

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient,
              private storage: Storage) { }

  getCustomerBranch(idGira) {
    return new Promise(async resolve=> {
      
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.get(`${URL}api/customers/branch/${idGira}`, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }

  getCustomerId(idCustomer) {
    return new Promise(async resolve=> {
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.get(`${URL}api/customers/${idCustomer}`, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }
  
  postCustomer(data) {
    return new Promise(async resolve=> {
      const headers = new HttpHeaders({
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
      this.http.post(`${URL}api/customers`,data, {headers})
      .subscribe( response => {
        resolve(response)
      })
    })
  }
}
