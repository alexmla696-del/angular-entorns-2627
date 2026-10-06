import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {
  // Propiedades
  nom: string = 'Alex';
  cognom: string = 'Monreal';
  edat: number = 18;
  cicle: string = 'DAW';

  // Getter nom complet
  get nomComplet(): string {
    return this.nom + ' ' + this.cognom;
  }

  // Getter inicials (ex: A.G.P)
  get inicials(): string {
    const paraules = this.nomComplet.split(' ');
    return paraules.map(p => p.charAt(0).toUpperCase()).join('.');
  }

  // Getter generació
  get generacio(): string {
    if (this.edat >= 25 && this.edat <= 40) {
      return 'Milennial';
    } else if (this.edat >= 10 && this.edat <= 24) {
      return 'Gen Z';
    } else {
      return 'Altre';
    }
  }
}