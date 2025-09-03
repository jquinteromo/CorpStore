import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

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


export class ShoppingcartService {
  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private productService: ProductService ) { 
      this.productService.getProducts().subscribe(products => {
        this.productsSubject.next(products);
    });
  }
}
