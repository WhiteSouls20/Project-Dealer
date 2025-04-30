import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'], // Fixed typo: styleUrl -> styleUrls
})
export class InicioComponent {
  // Example property for toggle functionality
  darkMode: boolean = false;

  // Method to handle toggle changes
  onToggleDarkMode(event: any): void {
    this.darkMode = event.checked;
    console.log('Dark mode:', this.darkMode);
  }
}
