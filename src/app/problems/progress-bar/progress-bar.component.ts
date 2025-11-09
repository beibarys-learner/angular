import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit{
  progress = 0;

  ngOnInit() {
    this.fillProgress();
  }

  fillProgress() {
    const duration = 2000; // 2 seconds
    const interval = 20;   // update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      this.progress += step;
      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(timer);
      }
    }, interval);
  }

}
