import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  intervalId: any;
  nums: number[] = [];
  throwNumbers(message: string) {
    console.log(message);
    this.intervalId = setInterval(() => {
      this.nums.push(Math.floor(Math.random() * 100));
    }, 1000);
  }
  stopThrowingNumbers(message: string) {
    console.log(message);
    //this.nums = [];
    clearInterval(this.intervalId);
  }
}
