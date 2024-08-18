import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule}  from 'd:/Nataly/Documentos/Universidad/SEXTO2/PROGRAMACION INTEGRATIVA CAS/u3/Laboratorio1U3/src/app/material';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {
  tiles: Tile[] = [
    { text: 'Adoptar es una gran responsabilidad', cols: 3, rows: 1, color: '#1b004b' },
    { text: 'Two', cols: 1, rows: 2, color: '#48484c' },
    { text: 'Compromiso de Esterilización', cols: 1, rows: 1, color: '#bb8fce ' },
    { text: 'Enviar solicitud de adopción', cols: 2, rows: 1, color: '#aeb6bf ' },
  ];
}