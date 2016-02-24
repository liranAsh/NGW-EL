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
    var LogOperations;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LogOperations = (function () {
                function LogOperations() {
                    this.arrData = [];
                    this.addGarbageData();
                }
                LogOperations.prototype.getSignleGarbageData = function (data) {
                    var tempData = {};
                    tempData.operationName = data.operationName;
                    tempData.date = data.date;
                    return tempData;
                };
                LogOperations.prototype.addGarbageData = function () {
                    var data1 = this.getSignleGarbageData({
                        operationName: "Liran",
                        date: 1316546
                    });
                    var data2 = this.getSignleGarbageData({
                        operationName: "Ziv",
                        date: 498215
                    });
                    this.arrData.push(data1, data2);
                };
                LogOperations = __decorate([
                    core_1.Component({
                        selector: 'log-operation',
                        templateUrl: 'app/log_operations/log.operations.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], LogOperations);
                return LogOperations;
            })();
            exports_1("LogOperations", LogOperations);
        }
    }
});
//# sourceMappingURL=log.operations.js.map