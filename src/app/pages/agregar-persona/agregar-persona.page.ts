import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.page.html',
  styleUrls: ['./agregar-persona.page.scss'],
})
export class AgregarPersonaPage implements OnInit {
  form: FormGroup;
  constructor(private personaService: PersonaService,
     private fb: FormBuilder) {
    this.makeForm();
  }

  makeForm(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.max(100)]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSummit(): void {
    if (this.form.valid) {
      const persona: Persona = {
        id: this.personaService.getLastId(),
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        edad: this.form.value.edad,
        telefono: this.form.value.telefono,
        direccion: this.form.value.direccion,
        email: this.form.value.email,
      };
      this.personaService.addPersona(persona);
      this.form.reset();
    }
  }

  ngOnInit() {}
}
