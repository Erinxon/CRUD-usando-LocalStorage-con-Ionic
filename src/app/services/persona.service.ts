import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { Persona } from '../models/persona.models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Persona[] = [];
  private personas$ = new BehaviorSubject<Persona[]>([]);

  constructor(private storage: LocalStorageService) { 
    this.carcarPersonas();
  }

  getPersonas(): Observable<Persona[]> {
    return this.personas$.asObservable();
  }

  getLastId(): number {
    let lastId =  this.personas.length > 0 ? this.personas[this.personas.length - 1].id + 1 : 1;
    return lastId;
  }

  addPersona(persona: Persona) {
    this.personas = [...this.personas, persona];
    this.SetSubjectAndLocalStorage();
  }

  deletePersona(id: number) {
    this.personas = this.personas.filter(p => p.id !== id);
    this.SetSubjectAndLocalStorage();
  }

  updatePersona(persona: Persona) {
    this.personas = this.personas.map(p => p.id === persona.id ? persona : p);
    this.SetSubjectAndLocalStorage();
  }

  private carcarPersonas() {
    this.storage.get('personas').then((p) => {
      this.personas = p ? p : [];
      this.personas$.next(this.personas);
    }).catch((e) => {
      console.log('Error: ',e)
    });
  }

  private SetSubjectAndLocalStorage(): void {
    this.storage.remove('personas');
    this.storage.set('personas', this.personas);
    this.carcarPersonas();
  }
 
}
