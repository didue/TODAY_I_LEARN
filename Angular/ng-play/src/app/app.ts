import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgIf, NgFor } from '@angular/common';
//imports
// import { Counter } from './features/counter/counter';
import { Todos } from './features/todos/todos';
import { ProductsPage } from './features/products/products-page/products-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //자식 컴포넌트
    // Counter,
    Todos,
    ProductsPage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-play');
}
