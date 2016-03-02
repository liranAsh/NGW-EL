System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ActivityService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActivityService = (function () {
                function ActivityService() {
                    this.arrActivityMissions = [];
                    this.sequenceIdNum = 0;
                }
                ActivityService.prototype.getSequenceId = function () {
                    this.sequenceIdNum += 1;
                    return this.sequenceIdNum;
                };
                ActivityService.prototype.getActivityMissions = function () {
                    return this.arrActivityMissions;
                };
                ActivityService.prototype.addMission = function () {
                    var mission1 = {
                        id: "mission" + this.getSequenceId(),
                        iconClass: "zmdi zmdi-flower-alt",
                        tooltipText: "someText"
                    };
                    this.arrActivityMissions.push(mission1);
                };
                ActivityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ActivityService);
                return ActivityService;
            })();
            exports_1("ActivityService", ActivityService);
        }
    }
});
//# sourceMappingURL=activity_service.js.map