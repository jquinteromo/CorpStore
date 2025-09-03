import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  images: string[];
  stock: number;
  title: string;
  description: string;
  price: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  

 private apiUrlDum = 'https://dummyjson.com/products?limit=170'; 
    constructor(private http: HttpClient) {}
    getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrlDum).pipe(
      map(res => res.products) 
    )
}

}
