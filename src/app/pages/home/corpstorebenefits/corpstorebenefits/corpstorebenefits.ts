import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-corpstorebenefits',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './corpstorebenefits.html',
  styleUrl: './corpstorebenefits.scss'
})
export class Corpstorebenefits {
benefits = [
  {icon: 'verified_user', title: 'Garantía Empresarial',description: 'Todos nuestros productos incluyen garantía extendida y soporte técnico especializado para empresas.'},
  {icon: 'local_shipping', title: 'Entrega Corporativa',description: 'Logística especializada con instalación y configuración incluida para pedidos empresariales.'},
  {icon: 'check_circle', title: 'Calidad Certificada',description: 'Productos certificados ISO y respaldados por las mejores marcas del mercado empresarial.'},
]
}
