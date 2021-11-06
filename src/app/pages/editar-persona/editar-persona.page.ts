import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona.models';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.page.html',
  styleUrls: ['./editar-persona.page.scss'],
})
export class EditarPersonaPage implements OnInit {
  form: FormGroup;
  personaEdit: Persona;
  constructor(private personaService: PersonaService,
     private fb: FormBuilder, private router: ActivatedRoute, 
     private route: Router) {
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
      this.personaEdit.nombre = this.form.value.nombre;
      this.personaEdit.apellido = this.form.value.apellido;
      this.personaEdit.edad = this.form.value.edad;
      this.personaEdit.telefono = this.form.value.telefono;
      this.personaEdit.direccion = this.form.value.direccion;
      this.personaEdit.email = this.form.value.email;
      this.personaService.updatePersona(this.personaEdit);
      this.toHome();
    }
  }

  ngOnInit() {
    const id =+ this.router.snapshot.paramMap.get('id');
    this.personaService.getPersonas().subscribe(p => {
      this.personaEdit = p.find(p => p.id === id)
    })
    this.form.patchValue(this.personaEdit);
  }

  toHome(): void {
    this.route.navigate(['/personas']);
  }

}
