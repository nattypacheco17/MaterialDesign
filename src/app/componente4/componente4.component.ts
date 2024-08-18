import { ChangeDetectionStrategy,Component } from '@angular/core';
import { MaterialModule}  from 'd:/Nataly/Documentos/Universidad/SEXTO2/PROGRAMACION INTEGRATIVA CAS/u3/Laboratorio1U3/src/app/material';


@Component({
  selector: 'app-componente4',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './componente4.component.html',
  styleUrl: './componente4.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Componente4Component {
}