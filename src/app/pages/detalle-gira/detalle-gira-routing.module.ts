import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleGiraPage } from './detalle-gira.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleGiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleGiraPageRoutingModule {}
