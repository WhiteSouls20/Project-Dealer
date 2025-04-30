import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RouterModule,CommonModule,MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
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
export default class LoginComponent {
  username: string ='';
  password: string='';
  

  constructor(private authService: AuthService, private router: Router){

  }

  login(): void{
    this.authService.login(this.username,this.password).subscribe({
      next: ()=> this.router.navigate(['/registro']),
      error: (err)=> console.error('Login failed', err)

    })
  }
}
