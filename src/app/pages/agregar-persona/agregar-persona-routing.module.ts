import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPersonaPage } from './agregar-persona.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPersonaPageRoutingModule {}
