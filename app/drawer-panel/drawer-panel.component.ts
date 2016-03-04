/**
 * Created by Ziv on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {ActivityPanelComponent} from '../activity_panel/activity-panel.component';
import {LogOperations} from '../log_operations/log.operations';
import {ActivityService} from "../services/activity_service";
import {MenuItem} from '../models/MenuItem';
import {MenuItemComponent} from '../menu_item/menu-item.component';

@Component({
    selector: 'ngw-drawer-panel',
    templateUrl: 'app/drawer-panel/drawer-panel.component.html',
    directives: [LogOperations, ActivityPanelComponent, MenuItemComponent]
})
export class DrawerPanelComponent{

    categories: MenuItem[];
    activityService: any;
    constructor(activity_service: ActivityService) {
        this.activityService = activity_service;
        debugger;
        this.initialCategories();
    }

    toggleDrawer() : void {
        var drawer : any = document.querySelector("#menuDrawerPanel");

        drawer.togglePanel();
    }

    clickMethod() {
        this.activityService.addMission();
    }

    initialCategories() {
        this.categories = [];
        var item1: MenuItem = new MenuItem("inbox", false, "#inbox", "inbox");
        var item2: MenuItem = new MenuItem("star", false, "#star", "star");
        var item3: MenuItem = new MenuItem("Alphonso Engelking", false, "#avatarblue", "inbox");
        var item4: MenuItem = new MenuItem("Angela Decker", false, "#avatar", "star");

        this.categories.push(item1, item2, item3, item4);
    }
}