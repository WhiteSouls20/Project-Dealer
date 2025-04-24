import { Routes } from '@angular/router';
import { InicioComponent } from '../app/paginas/inicio/inicio.component';
import { LoginComponent } from '../app/paginas/login/login.component';
import { DashboardComponent } from '../app/paginas/dashboard/dashboard.component';
import { Inicio2Component } from './paginas/inicio-2/inicio-2.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { CuentaComponent } from './paginas/cuenta/cuenta.component';
import { RecuperarCuentaComponent } from './paginas/recuperar-cuenta/recuperar-cuenta.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio2', component: Inicio2Component },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cuenta', component: CuentaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recuperar-cuenta', component: RecuperarCuentaComponent },
];
