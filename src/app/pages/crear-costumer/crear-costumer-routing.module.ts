import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCostumerPage } from './crear-costumer.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCostumerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCostumerPageRoutingModule {}
