import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


  export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'products', loadComponent: () => import('./pages/products/products').then(m => m.Products) },
    { path: 'shoppingcart', loadComponent: () => import('./pages/shoppingcart/shoppingcart').then(m => m.Shoppingcart) },
  {
    path: 'product/:id',
    loadComponent: () => import('./pages/productdetail/productdetail').then(m => m.Productdetail),
    data: { prerender: false } 
  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}