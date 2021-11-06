import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Personas', url: '/personas', icon: 'person' },
    { title: 'Agregar Personas', url: '/agregar-persona', icon: 'add' },
  ];
  constructor() {}
}
