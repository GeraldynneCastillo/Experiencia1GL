import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoappPageRoutingModule } from './infoapp-routing.module';

import { InfoappPage } from './infoapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoappPageRoutingModule
  ],
  declarations: [InfoappPage]
})
export class InfoappPageModule {}
