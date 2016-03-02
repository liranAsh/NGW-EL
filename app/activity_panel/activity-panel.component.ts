/**
 * Created by Liran on 01/03/2016.
 */
import {Component} from 'angular2/core';
import {WindowButtonsComponent} from  '../window_buttons/window_buttons.component';
import {ActivityService} from '../services/activity_service';

@Component({
    selector: 'activity-panel',
    templateUrl: 'app/activity_panel/activity-panel.component.html',
    directives: [WindowButtonsComponent],
    styles: [`
    .topPanel {
        position: fixed;
        width: 100vw;
        height: 5.5vh;
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
    arrActivityMissions: any;
    example: any;

    constructor(activityService: ActivityService) {
        this.arrActivityMissions = activityService.getActivityMissions();
        this.example = [
            {
                id: "mission1",
                iconClass: "zmdi zmdi-flower-alt"
            }
        ]

        debugger;
    }

}