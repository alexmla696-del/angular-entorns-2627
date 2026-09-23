import { Videojoc } from './videojoc';

export class Colleccio {
  nom: string;
  videojocs: Videojoc[];

  constructor(nom: string, videojocs: Videojoc[]) {
    this.nom = nom;
    this.videojocs = videojocs;
  }

  afegir(joc: Videojoc): void {
    this.videojocs.push(joc);
  }

  eliminar(id: number): void {
    this.videojocs = this.videojocs.filter(j => j.id !== id);
  }

  get totalJocs(): number {
    return this.videojocs.length;
  }
}
