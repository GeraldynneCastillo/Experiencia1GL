import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InisesionAlumnoPageRoutingModule } from './inisesion-alumno-routing.module';

import { InisesionAlumnoPage } from './inisesion-alumno.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InisesionAlumnoPageRoutingModule
  ],
  declarations: [InisesionAlumnoPage]
})
export class InisesionAlumnoPageModule {}
