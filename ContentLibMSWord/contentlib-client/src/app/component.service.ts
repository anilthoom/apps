import { Injectable } from '@angular/core';
import { Componentlib } from './componentlib';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  createComponentlib(complib: Componentlib) {
    throw new Error("Method not implemented.");
  }
  deleteComponentLib(id: number) {
    throw new Error("Method not implemented.");
  }
  getComponentLibList(): import("rxjs").Observable<import("./componentlib").Componentlib[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
