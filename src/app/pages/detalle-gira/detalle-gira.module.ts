import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleGiraPageRoutingModule } from './detalle-gira-routing.module';

import { DetalleGiraPage } from './detalle-gira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleGiraPageRoutingModule
  ],
  declarations: [DetalleGiraPage]
})
export class DetalleGiraPageModule {}
