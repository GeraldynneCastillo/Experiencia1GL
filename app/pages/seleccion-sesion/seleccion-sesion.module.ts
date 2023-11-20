import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionSesionPageRoutingModule } from './seleccion-sesion-routing.module';

import { SeleccionSesionPage } from './seleccion-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionSesionPageRoutingModule
  ],
  declarations: [SeleccionSesionPage]
})
export class SeleccionSesionPageModule {}
