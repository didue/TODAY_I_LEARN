import { Component, signal } from '@angular/core';
import { Chart } from '../ui/chart/chart';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Chart],
  template: `<h2>Home</h2>
    <p>Welcome!</p>`,
})
export class HomePage {
  //차트 데모용 데이터
  chartData = signal([34, 22, 55, 12, 90, 46, 77, 18]);
}
