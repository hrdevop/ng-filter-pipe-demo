import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class FilterPipeService {
  constructor(private http: HttpClient) {}
  private api = 'https://fakestoreapi.com/products';

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
}
