import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCostumerPageRoutingModule } from './crear-costumer-routing.module';

import { CrearCostumerPage } from './crear-costumer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCostumerPageRoutingModule
  ],
  declarations: [CrearCostumerPage]
})
export class CrearCostumerPageModule {}
