import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { CartService } from '../../core/cart.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule, MatBadgeModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'

})
export class Navbar {
constructor( private cartservice : CartService) { }

 get ProductsInCart(): number {
    return this.cartservice.getCart().length;       
 }

}
