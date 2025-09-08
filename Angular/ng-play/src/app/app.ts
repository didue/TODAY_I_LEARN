import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

//imports
// import { Counter } from './features/counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-play');
}
