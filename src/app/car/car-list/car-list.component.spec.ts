import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { CarListComponent } from './car-list.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CarListComponent', () => {
 let component: CarListComponent;
 let fixture: ComponentFixture<CarListComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [CarListComponent],
     providers: [ VehiculoService, provideHttpClientTesting(), provideHttpClient() ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CarListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
     const vehiculo = new Vehiculo(
       i + 1,
       `Renault ${i + 1}`,
       `Kangoo ${i + 1}`,
       `VU Express ${i + 1}`,
       2017+i,
       2500,
       "Blanco",
       "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"
     );
     component.vehiculos.push(vehiculo);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should render a table with 3 vehicle rows', () => {
   const table = debug.query(By.css('table.table'));
   expect(table).toBeTruthy();

   const rows = debug.queryAll(By.css('tbody tr'));
   expect(rows.length).toBe(3);

   expect(rows[0].nativeElement.textContent).toContain('Renault 1');
   expect(rows[1].nativeElement.textContent).toContain('Renault 2');
   expect(rows[2].nativeElement.textContent).toContain('Renault 3');
 });

});
