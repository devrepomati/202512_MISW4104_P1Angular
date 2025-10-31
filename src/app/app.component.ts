import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarListComponent } from "./car/car-list/car-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Comercialización de Automotores';
}
