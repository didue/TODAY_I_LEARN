import { NgFor, NgStyle } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './chart.html',
  styleUrl: './chart.css',
})
export class Chart {
  //외부에서 숫자배열을 상속
  data = input.required<number[]>();

  max = computed(() => Math.max(1, ...this.data()));
}
