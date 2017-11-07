import { Component } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  template: `
    <h1>Keyboard Events</h1>
    <p>
      <input type="text"
             (keydown)="onEvent($event)"
             on-keyup="onEvent($event)">
      <span class="large">Type: {{event?.type}}</span>
    </p>
    <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}</p>

    <p>
      <input type="text"
             on-keypress="onKeyPress($event)">
      <span class="large"> Key: {{key}}</span>
    </p>`,
  styles: [
    '.large {font-size: 30px;}'
  ]
})
export class KeyboardComponent {

  key: string;
  event: KeyboardEvent;

  onKeyPress(event: KeyboardEvent): void {
    this.key = event.key;
  }

  onEvent(event: KeyboardEvent): void {
    this.event = event;
  }
}
