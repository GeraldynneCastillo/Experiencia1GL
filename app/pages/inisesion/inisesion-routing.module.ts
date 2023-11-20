import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InisesionPage } from './inisesion.page';

const routes: Routes = [
  {
    path: '',
    component: InisesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InisesionPageRoutingModule {}
