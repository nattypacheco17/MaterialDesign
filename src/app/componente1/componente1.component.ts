
import {ChangeDetectionStrategy, Component} from '@angular/core';
import { MaterialModule}  from 'd:/Nataly/Documentos/Universidad/SEXTO2/PROGRAMACION INTEGRATIVA CAS/u3/Laboratorio1U3/src/app/material';


@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [MaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './componente1.component.html',
  styleUrl: './componente1.component.css'

})
export class Componente1Component {
}