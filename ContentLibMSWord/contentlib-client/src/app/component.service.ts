import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componentlib } from './componentlib';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private baseUrl = 'http://localhost:8080/cl/api/v1/components';

  constructor() { }
  
  updateComponentlib(id: number, complib: Componentlib) {
    throw new Error('Method not implemented.');
  }
  getComponentLib(id: number) {
    throw new Error('Method not implemented.');
  }
  createComponentlib(complib: Componentlib) {
    throw new Error("Method not implemented.");
  }
  deleteComponentLib(id: number) {
    throw new Error("Method not implemented.");
  }
  getComponentLibList(): import("rxjs").Observable<import("./componentlib").Componentlib[]> {
    throw new Error("Method not implemented.");
  }
}
