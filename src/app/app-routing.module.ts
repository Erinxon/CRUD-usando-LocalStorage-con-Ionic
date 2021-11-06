import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personas',
    pathMatch: 'full'
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'detalle-persona/:id',
    loadChildren: () => import('./pages/detalle-persona/detalle-persona.module').then( m => m.DetallePersonaPageModule)
  },
  {
    path: 'editar-persona/:id',
    loadChildren: () => import('./pages/editar-persona/editar-persona.module').then( m => m.EditarPersonaPageModule)
  },
  {
    path: 'agregar-persona',
    loadChildren: () => import('./pages/agregar-persona/agregar-persona.module').then( m => m.AgregarPersonaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
