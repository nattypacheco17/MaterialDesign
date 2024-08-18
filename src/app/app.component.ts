import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { MaterialModule } from 'd:/Nataly/Documentos/Universidad/SEXTO2/PROGRAMACION INTEGRATIVA CAS/u3/Laboratorio1U3/src/app/material';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,Componente1Component,Componente2Component,Componente3Component,Componente4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Laboratorio1U3';
}
