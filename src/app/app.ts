import { Component } from '@angular/core';
import { Videojoc } from './models/videojoc';
import { saludar, esMajorEdat, sumarArray } from './funcions';
import { Alumne } from './models/alumne';

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent {

  // 1. Array de videojocs
  videojocs: Videojoc[] = [
    { id: 1, nom: 'FIFA', plataforma: 'PS5', preu: 70, actiu: true },
    { id: 2, nom: 'Minecraft', plataforma: 'PC', preu: 25, actiu: true },
    { id: 3, nom: 'GTA V', plataforma: 'PS4', preu: 30, actiu: false },
    { id: 4, nom: 'Fortnite', plataforma: 'PC', preu: 0, actiu: true },
    { id: 5, nom: 'Valorant', plataforma: 'PC', preu: 0, actiu: false }
  ];

  // 2. getActius
  getActius(): Videojoc[] {
    return this.videojocs.filter(j => j.actiu);
  }

  // 3. findById
  findById(id: number): Videojoc | undefined {
    return this.videojocs.find(j => j.id === id);
  }

  // 4. formatar
  formatarElement(joc: Videojoc): string {
    return `${joc.nom} - ${joc.plataforma} - ${joc.preu}€`;
  }

  constructor() {
    // Funcions auxiliars
    console.log(saludar('Alex'));
    console.log(esMajorEdat(20));
    console.log(sumarArray([1, 2, 3]));

    // Alumne
    const a1 = new Alumne('Alex', 20, 'DAW', [7, 8, 6]);
    const a2 = new Alumne('Marc', 17, 'SMX', [4, 5, 3]);

    console.log(a1.presentar(), a1.haAprobat);
    console.log(a2.presentar(), a2.haAprobat);

    // Proves
    console.log(this.getActius());
    console.log(this.findById(1));
  }
}
