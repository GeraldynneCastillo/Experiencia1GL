import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcreatePageRoutingModule } from './qrcreate-routing.module';

import { QrcreatePage } from './qrcreate.page';

import { ReactiveFormsModule } from '@angular/forms';

import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    IonicModule,
    QrcreatePageRoutingModule
  ],
  declarations: [QrcreatePage]
})
export class QrcreatePageModule {}
