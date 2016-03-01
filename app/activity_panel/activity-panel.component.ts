/**
 * Created by Liran on 01/03/2016.
 */
import {Component} from 'angular2/core';
import {WindowButtonsComponent} from  '../window_buttons/window_buttons.component'

@Component({
    selector: 'activity-panel',
    templateUrl: 'app/activity_panel/activity-panel.component.html',
    directives: [WindowButtonsComponent],
    styles: [`
    .topPanel {
        position: fixed;
        width: 100vw;
        height: 4.5vh;
        background-color: #1A237E;
        opacity: 0.9;
        padding: 0;
        margin: 0;
        top: 0;
        right: 0;
    }
    `]
})
export class ActivityPanelComponent {


}