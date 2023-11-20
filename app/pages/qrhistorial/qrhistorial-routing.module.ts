import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrhistorialPage } from './qrhistorial.page';

const routes: Routes = [
  {
    path: '',
    component: QrhistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrhistorialPageRoutingModule {}
