import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {DrawerPanelComponent} from './drawer-panel.component';

@Component({
    selector: 'my-app',
    template: '<ngw-drawer-panel></ngw-drawer-panel>',
    directives:[DrawerPanelComponent]
})
export class AppComponent implements OnInit{
    ngOnInit():any {

    }
}