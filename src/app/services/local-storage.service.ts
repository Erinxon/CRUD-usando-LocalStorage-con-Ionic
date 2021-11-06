import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.models';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.create();
  }


  setItem(key: string, value: Persona[]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): Persona[] {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  async get(key: string): Promise<Persona[]>{
    const personas = await this.storage.get(key);
    return JSON.parse(personas);
  }

  async set(key: string, value: Persona[]): Promise<void> {
    await this.storage.set(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    await this.storage.remove(key);
  }
}
