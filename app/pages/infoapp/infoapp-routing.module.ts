import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoappPage } from './infoapp.page';

const routes: Routes = [
  {
    path: '',
    component: InfoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoappPageRoutingModule {}
