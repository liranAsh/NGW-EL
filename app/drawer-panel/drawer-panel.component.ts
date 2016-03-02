/**
 * Created by Ziv on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {ActivityPanelComponent} from '../activity_panel/activity-panel.component';
import {LogOperations} from '../log_operations/log.operations';

import {ActivityService} from "../services/activity_service";

@Component({
    selector: 'ngw-drawer-panel',
    templateUrl: 'app/drawer-panel/drawer-panel.component.html',
    directives: [LogOperations, ActivityPanelComponent]
})
export class DrawerPanelComponent{

    activityService: any;
    constructor(activity_service: ActivityService) {
        this.activityService = activity_service;
    }

    toggleDrawer() : void {
        var drawer : any = document.querySelector("#menuDrawerPanel");

        drawer.togglePanel();
    }

    clickMethod() {
        debugger;
        this.activityService.addMission();

    }
}