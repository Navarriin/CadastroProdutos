import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interface/Products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private url: string = 'http://localhost:3000/Products';
  constructor(private http: HttpClient) {}

  get(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
