import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';

import { Inicio2Component } from './paginas/inicio-2/inicio-2.component';
import { DashboardComponent } from '../app/paginas/dashboard/dashboard.component';
import LoginComponent from './paginas/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portaldealer-frontend';
}
