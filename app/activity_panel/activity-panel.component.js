System.register(['angular2/core', '../window_buttons/window_buttons.component', '../services/activity_service', '../top_sliding_drawer/top-sliding-drawer.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, window_buttons_component_1, activity_service_1, top_sliding_drawer_component_1;
    var ActivityPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (window_buttons_component_1_1) {
                window_buttons_component_1 = window_buttons_component_1_1;
            },
            function (activity_service_1_1) {
                activity_service_1 = activity_service_1_1;
            },
            function (top_sliding_drawer_component_1_1) {
                top_sliding_drawer_component_1 = top_sliding_drawer_component_1_1;
            }],
        execute: function() {
            ActivityPanelComponent = (function () {
                function ActivityPanelComponent(activityService) {
                    this.arrActivityMissions = activityService.getActivityMissions();
                    this.maxSizeDisplayMissions = 5;
                    this.example = [
                        {
                            id: "mission1",
                            iconClass: "zmdi zmdi-flower-alt"
                        }
                    ];
                }
                ActivityPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'activity-panel',
                        templateUrl: 'app/activity_panel/activity-panel.component.html',
                        directives: [window_buttons_component_1.WindowButtonsComponent, top_sliding_drawer_component_1.TopSlidingDrawer],
                        styles: ["\n    .topPanel {\n        position: relative;\n        width: 100vw;\n        height: 5.5vh;\n        background-color: #1A237E;\n        opacity: 0.9;\n        padding: 0;\n        margin: 0;\n        top: 0;\n        right: 0;\n        z-index:2;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [activity_service_1.ActivityService])
                ], ActivityPanelComponent);
                return ActivityPanelComponent;
            })();
            exports_1("ActivityPanelComponent", ActivityPanelComponent);
        }
    }
});
//# sourceMappingURL=activity-panel.component.js.map