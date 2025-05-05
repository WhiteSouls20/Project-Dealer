import { Component } from '@angular/core';
import { AppProgressComponent } from '../ui-components/progress/progress.component';
import { AppMenuComponent } from '../ui-components/menu/menu.component';

@Component({
  selector: 'app-inicio-2',
  standalone: true,
  imports: [], // Importamos el componente de menú
  templateUrl: './inicio-2.component.html',
  styleUrls: ['./inicio-2.component.scss']
})
export class Inicio2Component {}
