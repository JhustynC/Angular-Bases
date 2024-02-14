import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Desde Counter Component</h2>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(5)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="decreaseBy(5)">-1</button>
  `,
  styles: ``,
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset() {
    this.counter = 10;
  }
}
