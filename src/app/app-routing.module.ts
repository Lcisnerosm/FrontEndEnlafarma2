import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'clientes/:id',
    loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'detalle-gira/:id',
    loadChildren: () => import('./pages/detalle-gira/detalle-gira.module').then(m => m.DetalleGiraPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: 'crear-costumer/:id',
    loadChildren: () => import('./pages/crear-costumer/crear-costumer.module').then(m => m.CrearCostumerPageModule),
    canLoad: [UsuarioGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'historial-productos/:id',
    loadChildren: () => import('./pages/historial-productos/historial-productos.module').then( m => m.HistorialProductosPageModule)
  },
  {
    path: 'pedidos/:id',
    loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
