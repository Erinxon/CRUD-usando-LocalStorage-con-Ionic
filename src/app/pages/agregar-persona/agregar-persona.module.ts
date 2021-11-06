import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPersonaPageRoutingModule } from './agregar-persona-routing.module';

import { AgregarPersonaPage } from './agregar-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarPersonaPageRoutingModule
  ],
  declarations: [AgregarPersonaPage]
})
export class AgregarPersonaPageModule {}
