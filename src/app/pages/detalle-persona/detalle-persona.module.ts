import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePersonaPageRoutingModule } from './detalle-persona-routing.module';

import { DetallePersonaPage } from './detalle-persona.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePersonaPageRoutingModule,
    SharedPageModule,
  ],
  declarations: [DetallePersonaPage]
})
export class DetallePersonaPageModule {}
