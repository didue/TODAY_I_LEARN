import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//imports
// import { Counter } from './features/counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // HomePage,
    //자식 컴포넌트
    // Counter,
    // Todos,
    // ProductsPage,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-play');
}
