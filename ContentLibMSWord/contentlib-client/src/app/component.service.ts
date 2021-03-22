import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  deleteComponentLib(id: number) {
    throw new Error("Method not implemented.");
  }
  getComponentLibList(): import("rxjs").Observable<import("./componentlib").Componentlib[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
