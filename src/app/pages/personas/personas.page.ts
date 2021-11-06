import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  personas: Persona[];
  loanding: boolean = true;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.loanding = true;
    this.personaService.getPersonas().subscribe(p => {
      this.personas = p;
      this.loanding = false;
    });
  }

  getIniciales(nombre: string, apellido: string): string {
    return nombre.charAt(0) + apellido.charAt(0);
  }

  eliminarPersona(id: number): void {
    this.personaService.deletePersona(id);
  }

}
