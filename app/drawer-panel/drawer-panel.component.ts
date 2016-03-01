/**
 * Created by Ziv on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {ActivityPanelComponent} from '../activity_panel/activity-panel.component';
import {LogOperations} from '../log_operations/log.operations';

@Component({
    selector: 'ngw-drawer-panel',
    templateUrl: 'app/drawer-panel/drawer-panel.component.html',
    directives: [LogOperations, ActivityPanelComponent]
})
export class DrawerPanelComponent{

    toggleDrawer() : void {
        var drawer : any = document.querySelector("#menuDrawerPanel");

        drawer.togglePanel();
    }
}