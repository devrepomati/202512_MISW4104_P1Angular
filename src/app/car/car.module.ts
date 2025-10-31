import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListModule } from './car-list/car-list.module';

@NgModule({
  imports: [
    CommonModule,
    CarListModule
  ]
})
export class CarModule { }
