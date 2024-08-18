import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule}  from 'd:/Nataly/Documentos/Universidad/SEXTO2/PROGRAMACION INTEGRATIVA CAS/u3/Laboratorio1U3/src/app/material';



@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MaterialModule],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  adoptionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    reason: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.adoptionForm.valid) {
      console.log('Formulario Enviado', this.adoptionForm.value);
    }
  }
}