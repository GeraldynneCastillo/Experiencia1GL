import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InisesionAlumnoPage } from './inisesion-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: InisesionAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InisesionAlumnoPageRoutingModule {}
