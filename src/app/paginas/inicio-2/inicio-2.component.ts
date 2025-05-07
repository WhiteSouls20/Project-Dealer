import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CalendarComponent } from '../../ui-components/calendar/calendar.component';

@Component({
  selector: 'app-inicio-2',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './inicio-2.component.html',
  styleUrls: ['./inicio-2.component.scss']
})
export class Inicio2Component implements OnInit {
  username: string = 'Usuario'; // Nombre del usuario (puedes obtenerlo dinámicamente)
  ventasChart: any;
  dineroChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createVentasChart();
    this.createDineroChart();
  }

  createVentasChart(): void {
    const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;
    this.ventasChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Ventas por día',
            data: [5, 10, 8, 15, 12, 20, 25], // Datos de ejemplo
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Días de la semana',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Cantidad de ventas',
            },
          },
        },
      },
    });
  }

  createDineroChart(): void {
    const ctx = document.getElementById('dineroChart') as HTMLCanvasElement;
    this.dineroChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [
          {
            label: 'Dinero obtenido (USD)',
            data: [100, 200, 150, 300, 250, 400, 500], // Datos de ejemplo
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Días de la semana',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Dinero (USD)',
            },
          },
        },
      },
    });
  }
}
