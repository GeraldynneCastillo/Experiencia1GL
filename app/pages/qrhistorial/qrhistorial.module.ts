import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrhistorialPageRoutingModule } from './qrhistorial-routing.module';

import { QrhistorialPage } from './qrhistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrhistorialPageRoutingModule
  ],
  declarations: [QrhistorialPage]
})
export class QrhistorialPageModule {}
