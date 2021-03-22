import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Componentlib } from './componentlib';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private baseUrl = 'http://localhost:8080/cl/api/v1/components';

  constructor(private http: HttpClient) { }
  
  getComponentLib(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  createComponentlib(complib: Componentlib) {
    throw new Error("Method not implemented.");
  }

  updateComponentlib(id: number, complib: Componentlib) {
    throw new Error('Method not implemented.');
  }
    
  deleteComponentLib(id: number) {
    throw new Error("Method not implemented.");
  }

  getComponentLibList(): import("rxjs").Observable<import("./componentlib").Componentlib[]> {
    throw new Error("Method not implemented.");
  }
}
