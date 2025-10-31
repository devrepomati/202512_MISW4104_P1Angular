import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl;

  private http = inject(HttpClient);

  getBooks(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

  getBookDetails(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }

}
