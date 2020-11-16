import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { resolve } from 'dns';
import { environment } from 'src/environments/environment';
import { Brachs } from '../interfaces/brachs';
const URL = environment.URL

@Injectable({
  providedIn: 'root'
})
export class BrachsService {

  constructor(private http: HttpClient,
              private storage: Storage) { }

  getBrancks():Promise<Brachs> {
    return new Promise(async resolve => {
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'authorization': `Bearer ${await this.storage.get('token')}` 
      })
  
      this.http.get<Brachs>(`${URL}api/branchs`,{headers})
      .subscribe(resp => {
        resolve(resp)
      })

    })
  }
}
