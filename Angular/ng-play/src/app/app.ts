import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//imports
import { Counter } from './features/counter/counter';
import { Todos } from './features/todos/todos';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //자식 컴포넌트
    Counter,
    Todos,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-play');
}
