import { Component, AfterViewInit } from '@angular/core';
import { AppProgressComponent } from '../ui-components/progress/progress.component';
import { AppMenuComponent } from '../ui-components/menu/menu.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-inicio-2',
  standalone: true,
  imports: [], // Importamos el componente de menú
  templateUrl: './inicio-2.component.html',
  styleUrls: ['./inicio-2.component.scss']
})
export class Inicio2Component implements AfterViewInit {
  ngAfterViewInit(): void {
    this.cargarGrafico();
  }

  cargarGrafico(): void {
    const ctx = document.getElementById('ventasGrafico') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar', // Tipo de gráfico (puedes cambiarlo a 'line', 'pie', etc.)
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Ventas ($)',
            data: [120, 150, 180, 200, 170, 220, 250], // Datos de ejemplo
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Cuentas generadas',
            data: [5, 8, 6, 10, 7, 12, 15], // Datos de ejemplo
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
