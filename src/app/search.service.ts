import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/products")
  }

  productsCategory(): Observable<any>{
    return this.http.get("http://127.0.0.1:8000/api/products/category")
  }
}