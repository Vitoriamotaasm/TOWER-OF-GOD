import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]>{
    return this.http.get<any[]>('/api/items');
  }

  getItem(id: any): Observable<any> {
    return this.http.get<any>(`/api/items/${id}`); 
  }

  
}
