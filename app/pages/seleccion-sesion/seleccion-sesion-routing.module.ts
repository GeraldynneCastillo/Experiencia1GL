import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionSesionPage } from './seleccion-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionSesionPageRoutingModule {}
