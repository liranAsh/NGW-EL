/**
 * Created by Liran on 01/03/2016.
 */
import {Component} from 'angular2/core';
import {WindowButtonsComponent} from  '../window_buttons/window_buttons.component';
import {ActivityService} from '../services/activity_service';
import {TopSlidingDrawer} from '../top_sliding_drawer/top-sliding-drawer.component';

@Component({
    selector: 'activity-panel',
    templateUrl: 'app/activity_panel/activity-panel.component.html',
    directives: [WindowButtonsComponent, TopSlidingDrawer],
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
    maxSizeDisplayMissions: number;
    example: any;

    constructor(activityService: ActivityService) {
        this.arrActivityMissions = activityService.getActivityMissions();
        this.maxSizeDisplayMissions = 5;
        this.example = [
            {
                id: "mission1",
                iconClass: "zmdi zmdi-flower-alt"
            }
        ]
    }

}