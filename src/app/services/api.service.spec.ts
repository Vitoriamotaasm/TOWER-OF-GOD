import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>('${this.apiUtl}/${id}');
  }

  addItem(item: Item): Observable<Item> {
    return this.http.get<Item>('${this.apiUrl}/${id}');
  }
}