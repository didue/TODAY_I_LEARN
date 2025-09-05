import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Todo = { id: number; text: string; done: boolean };

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, NgIf], // Standalone 컴포넌트는 필요한 디렉티브/파이프를 imports로 명시
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos = signal<Todo[]>([
    { id: 1, text: 'Learn Angular', done: false },
    { id: 2, text: 'Build something', done: false },
  ]);

  toggle(id: number) {
    this.todos.update((list) => list.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  add(text: string) {
    const id = Math.max(0, ...this.todos().map((t) => t.id)) + 1;
    this.todos.update((list) => [...list, { id, text, done: false }]);
  }
}
