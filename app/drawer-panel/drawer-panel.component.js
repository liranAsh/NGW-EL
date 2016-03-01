System.register(['angular2/core', '../activity_panel/activity-panel.component', '../log_operations/log.operations'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, activity_panel_component_1, log_operations_1;
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
            }],
        execute: function() {
            DrawerPanelComponent = (function () {
                function DrawerPanelComponent() {
                }
                DrawerPanelComponent.prototype.toggleDrawer = function () {
                    var drawer = document.querySelector("#menuDrawerPanel");
                    drawer.togglePanel();
                };
                DrawerPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'ngw-drawer-panel',
                        templateUrl: 'app/drawer-panel/drawer-panel.component.html',
                        directives: [log_operations_1.LogOperations, activity_panel_component_1.ActivityPanelComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DrawerPanelComponent);
                return DrawerPanelComponent;
            })();
            exports_1("DrawerPanelComponent", DrawerPanelComponent);
        }
    }
});
//# sourceMappingURL=drawer-panel.component.js.map