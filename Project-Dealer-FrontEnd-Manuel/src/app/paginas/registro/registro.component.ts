import { Component, inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class RegistroComponent {

  formulario: FormGroup;
  registro = inject(RegisterService)

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      username: ['',Validators.required],
      rut: ['',Validators.required],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required],
      celular: ['',Validators.required],
      direccion: ['',Validators.required],
      password: ['',Validators.required],
      genero: ['',Validators.required],
    });
  }
  

  async onSubmit() {
    const response = await this.registro.register(this.formulario.value)
    console.log(response)
  }
}
