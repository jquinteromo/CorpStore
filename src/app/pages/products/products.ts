import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { Router } from '@angular/router';
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
}


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products {
  private shoppingcart = inject(ShoppingcartService);
  private router = inject(Router);
  private cartService = inject(CartService);

  ExampleProducts: Product[] = [];

  btnsCategories = [
    { categorie: 'Todos los productos', icon: 'fa-solid fa-box' },
  ];

  ngOnInit(): void {
    console.log('ShoppingcartService:', this.shoppingcart);
    this.shoppingcart.products$.subscribe({
      next: (data) => {
        const selectedCategories = ['smartphones', 'automotive', '', 'laptops'];
        this.ExampleProducts = data.filter((product: any) =>
          selectedCategories.includes(product.category)
        );
        console.log('Productos de oficina:', this.ExampleProducts);
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      },
    });
  }

  addProduct(product: Product) {
    if(this.cartService.getCart().some(p => p.id === product.id)){
      return
  
  }   this.cartService.addProduct(product);

  }


  goToDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
