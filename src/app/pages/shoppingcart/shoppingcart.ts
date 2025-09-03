import { Component } from '@angular/core';

import {ShoppingcartService} from '../../core/shoppingcart.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../core/cart.service';


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


@Component({
  selector: 'app-shoppingcart',
  imports: [CommonModule,MatIconModule ],
  templateUrl: './shoppingcart.html',
  styleUrl: './shoppingcart.scss'
})


export class Shoppingcart {



amountToPay: number = 1;

Products: Product[] = [];


constructor(private shoppingcart:ShoppingcartService, private cartservice : CartService) { }

get ProductsInCart(): Product[] {
  return this.cartservice.getCart();
}



roundedPrice(product: Product): number {
  return Math.round(product.price);
}


sumeamount (product: Product){
   const newQuantity = (product.quantity ?? 1) + 1;
  this.cartservice.updateProductQuantity(product.id, newQuantity);
}

decraseamount (product: Product){ 

  if(product.quantity && product.quantity > 1){
        product.quantity = (product.quantity ?? 1) - 1;
  }

}

Totalprecieproduct(product: Product) {
  return (product.quantity??1) * Math.round(product.price);
}

Subtotal (): number {
  return this.ProductsInCart.reduce((total, product) => total + (product.quantity ?? 1) * Math.round(product.price), 0);
}

Total():number{
  return Math.round(this.Subtotal() + 138.60)
}

delecproduct(id:number){
  const updatedCart = this.cartservice.getCart().filter(product => product.id !== id);
  this.cartservice.setCar(updatedCart);
}

ngOnInit(): void {


  this.shoppingcart.products$.subscribe({
    next: (data) => {
      const selectedCategories = ['smartphones','automotive', '','laptops'];
   
      const ProductsOffice = data.filter((product: any) =>
        selectedCategories.includes(product.category)
      );

      this.Products = ProductsOffice
      console.log('Productos de oficina:', this.Products);
    },
    error: (err) => {
      console.error('Error al obtener productos:', err);
    }

    
  });
}


}
