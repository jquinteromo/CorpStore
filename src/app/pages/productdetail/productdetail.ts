import { Component ,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService} from '../../core/shoppingcart.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { signal } from '@angular/core';
import { CartService } from '../../core/cart.service';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
defineComponents(IgcRatingComponent);

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
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './productdetail.html',
  styleUrls: ['./productdetail.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Productdetail {

private cartService = inject(CartService);

  constructor(
    private route: ActivatedRoute,
    private shoppingcart: ShoppingcartService
  ) {}

  product: Product | undefined;
  

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.shoppingcart.products$.subscribe(products => {
      this.product = products.find(p => p.id === productId);
    });
  }

  readonly productos = signal<Product[]>([]);
 
addProduct(product: Product) {
  const productWithQuantity = {
    ...product,
    quantity: product.quantity ?? 1
  };

  this.cartService.addProduct(productWithQuantity);
  console.log('Carrito actualizado:', this.cartService.getCart());
}
}