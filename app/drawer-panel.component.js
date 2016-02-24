System.register(['angular2/core', './log_operations/log.operations'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, log_operations_1;
    var DrawerPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_operations_1_1) {
                log_operations_1 = log_operations_1_1;
            }],
        execute: function() {
            DrawerPanelComponent = (function () {
                function DrawerPanelComponent() {
                }
                DrawerPanelComponent.prototype.toggleDrawer = function () {
                    debugger;
                    var drawer = document.querySelector("#menuDrawerPanel");
                    drawer.togglePanel();
                };
                DrawerPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'ngw-drawer-panel',
                        template: "\n\n    <paper-drawer-panel id=\"menuDrawerPanel\" responsive-width=\"100000px\">\n\n        <div drawer>\n            <h1>drawer section</h1>\n        </div>\n\n        <div main>\n            <paper-toolbar class=\"main\">\n                <paper-icon-button icon=\"menu\" (click)=\"toggleDrawer()\"></paper-icon-button>\n            </paper-toolbar>\n\n            <log-operation></log-operation>\n        </div>\n\n    </paper-drawer-panel>\n    ",
                        directives: [log_operations_1.LogOperations]
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