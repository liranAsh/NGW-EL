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
    drawer: any;
    bIsDrawerOpen: boolean = false;

    constructor(activity_service: ActivityService) {
        this.activityService = activity_service;

        this.initialCategories();
    }

    toggleDrawer() : void {

        if(this.drawer === undefined || this.drawer === null) {
            debugger;
            this.drawer = document.querySelector("#menuDrawerPanel");

            this.drawer.addEventListener("iron-select", () =>
            {
                var justMakingAngularDirtyCheckIfDrawerIsOpen = -999;
            });
        }

        this.drawer.togglePanel();
    }

    clickMethod() {
        this.activityService.addMission();
    }

    initialCategories() {
        this.categories = [];
        var startItem: MenuItem = new MenuItem("start", false, "inbox", "#start");
        var machinesItem: MenuItem = new MenuItem("machines", false, "star", "#machines");
        var lastMissionsItem: MenuItem = new MenuItem("last missions", true, "inbox");
        var favoritesItem: MenuItem = new MenuItem("favoritessss", true, "inbox");
        var logOperationsItem: MenuItem = new MenuItem("log operations", false, "star", "#avatar");

        // Missions
        var mission1: MenuItem = new MenuItem("mission 1", false, "inbox", "#mission1");
        var mission2: MenuItem = new MenuItem("mission 2", false, "inbox", "#mission2");
        lastMissionsItem.addMenuItem(mission1);
        lastMissionsItem.addMenuItem(mission2);

        this.categories.push(startItem, machinesItem, lastMissionsItem, favoritesItem, logOperationsItem);
    }
}