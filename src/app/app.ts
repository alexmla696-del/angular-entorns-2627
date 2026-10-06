import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tarjeta} from './Components/tarjeta/tarjeta';
import { Perfil } from './Components/perfil/perfil';
import { Producte } from './interfacres/producte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('angular-entorns-2627');
  
  //ciutats: string[] = ['Barcelona', 'Lleida', 'Girona', 'Tarragona'];


  productes: Producte[] = [
    {nom: 'Teclat', preu: 89.99, id: 1, estoc: 15},
    {nom: 'Monitor', preu: 350.99, id: 2, estoc: 5},
    {nom: 'Ratolí', preu: 5.99, id: 3, estoc: 25},
    {nom: 'Portàtil', preu: 899.99, id: 4, estoc: 10},
    {nom: 'Auriculars', preu: 29.99, id: 5, estoc: 20}
  ];

}