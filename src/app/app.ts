import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet,Footer,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TrendyWear-app');
}
