import { Component } from '@angular/core';
import { Perfil } from './Components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
