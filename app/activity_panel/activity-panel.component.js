System.register(['angular2/core', '../window_buttons/window_buttons.component'], function(exports_1) {
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
    var core_1, window_buttons_component_1;
    var ActivityPanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (window_buttons_component_1_1) {
                window_buttons_component_1 = window_buttons_component_1_1;
            }],
        execute: function() {
            ActivityPanelComponent = (function () {
                function ActivityPanelComponent() {
                }
                ActivityPanelComponent = __decorate([
                    core_1.Component({
                        selector: 'activity-panel',
                        templateUrl: 'app/activity_panel/activity-panel.component.html',
                        directives: [window_buttons_component_1.WindowButtonsComponent],
                        styles: ["\n    .topPanel {\n        position: fixed;\n        width: 100vw;\n        height: 4.5vh;\n        background-color: #1A237E;\n        opacity: 0.9;\n        padding: 0;\n        margin: 0;\n        top: 0;\n        right: 0;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActivityPanelComponent);
                return ActivityPanelComponent;
            })();
            exports_1("ActivityPanelComponent", ActivityPanelComponent);
        }
    }
});
//# sourceMappingURL=activity-panel.component.js.map