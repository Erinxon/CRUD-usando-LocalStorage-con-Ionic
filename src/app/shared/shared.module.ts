import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';

import { SharedPage } from './shared.page';
import { LoandingComponent } from './loanding/loanding.component';
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule
  ],
  exports: [LoandingComponent, SharedPage, CardComponent],
  declarations: [SharedPage, LoandingComponent, CardComponent]
})
export class SharedPageModule {}
