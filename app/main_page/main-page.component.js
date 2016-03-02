System.register(['angular2/core', '../drawer-panel/drawer-panel.component', '../activity_panel/activity-panel.component', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drawer_panel_component_1, activity_panel_component_1;
    var MainPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drawer_panel_component_1_1) {
                drawer_panel_component_1 = drawer_panel_component_1_1;
            },
            function (activity_panel_component_1_1) {
                activity_panel_component_1 = activity_panel_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            MainPageComponent = (function () {
                function MainPageComponent() {
                }
                MainPageComponent.prototype.ngOnInit = function () {
                };
                MainPageComponent = __decorate([
                    core_1.Component({
                        selector: 'main-page',
                        templateUrl: 'app/main_page/main-page.component.html',
                        directives: [drawer_panel_component_1.DrawerPanelComponent, activity_panel_component_1.ActivityPanelComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainPageComponent);
                return MainPageComponent;
            })();
            exports_1("MainPageComponent", MainPageComponent);
        }
    }
});
//# sourceMappingURL=main-page.component.js.map