import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.page.html',
  styleUrls: ['./detalle-persona.page.scss'],
})
export class DetallePersonaPage implements OnInit {
  persona: Persona;
  constructor(private router: ActivatedRoute, private personaService: PersonaService) { }

  ngOnInit() {
    const id =+ this.router.snapshot.paramMap.get('id');
    this.personaService.getPersonas().subscribe(p => {
      this.persona = p.find(p => p.id === id)
    })
  }

}
