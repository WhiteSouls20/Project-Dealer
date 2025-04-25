import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from '../app/paginas/login/login.component';
import { Inicio2Component } from './paginas/inicio-2/inicio-2.component';
import { DashboardComponent } from '../app/paginas/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portaldealer-frontend';
}
