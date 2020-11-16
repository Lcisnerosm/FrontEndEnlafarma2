import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Brachs } from 'src/app/interfaces/brachs';
import { BrachsService } from 'src/app/services/brachs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private branchsServices: BrachsService,
    private storage: Storage) {}

  branchs: Brachs;
  Data: any;
  user:any

 async ngOnInit() {
    console.log(await this.branchsServices.getBrancks())
    this.branchs = await this.branchsServices.getBrancks()
    console.log(this.branchs.data)
    this.Data = this.branchs.data
    this.user = await this.storage.get('email')
  }

}
