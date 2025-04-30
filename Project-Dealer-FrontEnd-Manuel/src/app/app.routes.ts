import { Routes } from '@angular/router';
import { InicioComponent } from '../app/paginas/inicio/inicio.component';
import { DashboardComponent } from '../app/paginas/dashboard/dashboard.component';
import { Inicio2Component } from './paginas/inicio-2/inicio-2.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CuentaComponent } from './paginas/cuenta/cuenta.component';
import { RecuperarCuentaComponent } from './paginas/recuperar-cuenta/recuperar-cuenta.component';
import LoginComponent from './paginas/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // Rutas públicas
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio2', component: Inicio2Component },
  { path: 'registro', component: RegistroComponent },
  
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },

  // Rutas protegidas
  { path: 'cuenta', component: CuentaComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent,canActivate:[AuthenticatedGuard] },
];
