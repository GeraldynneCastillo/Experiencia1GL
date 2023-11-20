import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InisesionPageRoutingModule } from './inisesion-routing.module';
import { InisesionPage } from './inisesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InisesionPageRoutingModule
  ],
  declarations: [InisesionPage]
})
export class InisesionPageModule {}
