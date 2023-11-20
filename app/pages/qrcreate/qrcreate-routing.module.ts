import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcreatePage } from './qrcreate.page';

const routes: Routes = [
  {
    path: '',
    component: QrcreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcreatePageRoutingModule {}
