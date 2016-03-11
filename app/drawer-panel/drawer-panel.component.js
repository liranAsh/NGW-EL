System.register(['angular2/core', '../activity_panel/activity-panel.component', '../log_operations/log.operations', "../services/activity_service", '../models/MenuItem', '../menu_item/menu-item.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, activity_panel_component_1, log_operations_1, activity_service_1, MenuItem_1, menu_item_component_1;
    var DrawerPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (activity_panel_component_1_1) {
                activity_panel_component_1 = activity_panel_component_1_1;
            },
            function (log_operations_1_1) {
                log_operations_1 = log_operations_1_1;
            },
            function (activity_service_1_1) {
                activity_service_1 = activity_service_1_1;
            },
            function (MenuItem_1_1) {
                MenuItem_1 = MenuItem_1_1;
            },
            function (menu_item_component_1_1) {
                menu_item_component_1 = menu_item_component_1_1;
            }],
        execute: function() {
            DrawerPanelComponent = (function () {
                function DrawerPanelComponent(activityService) {
                    this.activityService = activityService;
                    this.bIsDrawerOpen = false;
                    this.initialCategories();
                }
                DrawerPanelComponent.prototype.toggleDrawer = function () {
                    if (this.drawer === undefined || this.drawer === null) {
                        this.drawer = document.querySelector("#menuDrawerPanel");
                        this.drawer.addEventListener("iron-select", function () {
                            var justMakingAngularDirtyCheckIfDrawerIsOpen = -999;
                        });
                    }
                    this.drawer.togglePanel();
                };
                DrawerPanelComponent.prototype.clickMethod = function () {
                    this.activityService.addMission();
                };
                DrawerPanelComponent.prototype.initialCategories = function () {
                    this.categories = [];
                    var startItem = new MenuItem_1.MenuItem("start", false, "inbox", "#start");
                    var machinesItem = new MenuItem_1.MenuItem("machines", false, "star", "#machines");
                    var lastMissionsItem = new MenuItem_1.MenuItem("last missions", true, "inbox");
                    var favoritesItem = new MenuItem_1.MenuItem("favoritessss", true, "inbox");
                    var logOperationsItem = new MenuItem_1.MenuItem("log operations", false, "star", "#avatar");
                    // Missions
                    var mission1 = new MenuItem_1.MenuItem("mission 1", false, "inbox", "#mission1");
                    var mission2 = new MenuItem_1.MenuItem("mission 2", false, "inbox", "#mission2");
                    lastMissionsItem.addMenuItem(mission1);
                    lastMissionsItem.addMenuItem(mission2);
                    this.categories.push(startItem, machinesItem, lastMissionsItem, favoritesItem, logOperationsItem);
                };
                DrawerPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'ngw-drawer-panel',
                        templateUrl: 'app/drawer-panel/drawer-panel.component.html',
                        directives: [log_operations_1.LogOperations, activity_panel_component_1.ActivityPanelComponent, menu_item_component_1.MenuItemComponent]
                    }), 
                    __metadata('design:paramtypes', [activity_service_1.ActivityService])
                ], DrawerPanelComponent);
                return DrawerPanelComponent;
            })();
            exports_1("DrawerPanelComponent", DrawerPanelComponent);
        }
    }
});
//# sourceMappingURL=drawer-panel.component.js.map