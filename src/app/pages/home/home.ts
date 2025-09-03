import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {Corpstorebenefits} from './corpstorebenefits/corpstorebenefits/corpstorebenefits';
import {Contactdetails} from './contactdetails/contactdetails';


import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  imports: [MatIconModule,Corpstorebenefits, Contactdetails],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  
  constructor(private router:Router) { }
 
goToProducts() { 
  this.router.navigate(['/products']);
}
}
