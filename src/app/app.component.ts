import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-mouse *ngIf="showSection('mouse')"></app-mouse>
        <app-drag-drop *ngIf="showSection('drag-drop')"></app-drag-drop>
        <app-keyboard *ngIf="showSection('keyboard')"></app-keyboard>
        `
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}
