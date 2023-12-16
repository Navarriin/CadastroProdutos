import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interface/Products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  readonly url: string = 'http://localhost:8080/products';
  constructor(private http: HttpClient) {}

  get(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url);
  }

  post(body: Products): Observable<Products> {
    return this.http.post<Products>(this.url, body);
  }

  update(body: Products): Observable<Products> {
    return this.http.put<Products>(`${this.url}/${body.id}`, body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
