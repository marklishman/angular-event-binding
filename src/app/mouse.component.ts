import { Component } from '@angular/core';

@Component({
    selector: 'app-mouse',
    template: `
        <h1>Mouse Events</h1>
        <div class="box" (mouseenter)="onEvent($event)"
                         (mouseleave)="onEvent($event)"
                         (mousemove)="coordinates($event)"
                         on-click="onEvent($event)"
                         on-dblclick="onEvent($event)"
                         on-contextmenu="onEvent($event)">
            <p class="type">Type: {{event?.type}}</p>
            <p>x: {{clientX}}, y: {{clientY}}</p>
            <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}</p>
        </div>`,
    styles: [
        '.box {width:300px; height:200px; border: 1px solid LightGray; padding: 10px;}',
        '.type {font-size: 30px;}'
    ]
})
export class MouseComponent {

    event: MouseEvent;
    clientX = 0;
    clientY = 0;

    onEvent(event: MouseEvent): void {
        this.event = event;
    }

    coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
}
