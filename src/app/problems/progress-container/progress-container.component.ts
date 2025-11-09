import { Component } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-progress-container',
  imports: [ProgressBarComponent],
  templateUrl: './progress-container.component.html',
  styleUrl: './progress-container.component.scss'
})
export class ProgressContainerComponent {
  bars: number[] = [];

  addBar() {
      this.bars.push(Date.now()); // unique id
  }
}
