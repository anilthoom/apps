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
  
  createComponentlib(complib: Componentlib): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, complib);
  }

  updateComponentlib(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
    
  deleteComponentLib(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getComponentLibList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
