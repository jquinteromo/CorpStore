import { Injectable, signal } from '@angular/core';


interface Product {
  id:number
title: string;
  description: string;
  price: number;  
  images: string[];
  stock: number;
  rating?: number;
  warrantyInformation?: string
  shippingInformation?: string
  availabilityStatus?: string
  category?: string
  weight?: string
  dimensions?: string
  quantity?: number;
}


@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSignal = signal<Product[]>([]);
  cart$ = this.cartSignal.asReadonly();

  addProduct(product: Product) {
    this.cartSignal.update(current => [...current, product]);
  }

updateProductQuantity(id: number, newQuantity: number) {
  this.cartSignal.update(current =>
    current.map(p =>
      p.id === id ? { ...p, quantity: newQuantity } : p
    )
  );
}

  getCart() {
    return this.cartSignal();
  }

  setCar(newCart: Product[]) {
    this.cartSignal.set(newCart);
  }
}
