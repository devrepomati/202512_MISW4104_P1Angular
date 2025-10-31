import { Component, OnInit, inject } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  marcaSummary: { marca: string, count: number }[] = [];
  summaryHtml = '';

  vehiculoService = inject(VehiculoService);

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos: Vehiculo[]) => {
      this.vehiculos = vehiculos;
      this.updateMarcaSummary();
      this.updateSummaryHtml();
    });
  }

  updateSummaryHtml(): void {
    this.summaryHtml = this.marcaSummary
      .map(item => `<p>Total ${item.marca}: ${item.count}</p>`)
      .join('');
  }

  updateMarcaSummary(): void {
    const summaryMap = new Map<string, number>();
    for (const vehiculo of this.vehiculos) {
      summaryMap.set(vehiculo.marca, (summaryMap.get(vehiculo.marca) || 0) + 1);
    }
    this.marcaSummary = Array.from(summaryMap.entries()).map(([marca, count]) => ({ marca, count }));
  }

}
