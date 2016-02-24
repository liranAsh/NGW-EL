System.register(['angular2/core'], function(exports_1) {
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
                        date: new Date(1316546).toDateString()
                    });
                    var data2 = this.getSignleGarbageData({
                        operationName: "Ziv",
                        date: new Date(498215).toDateString()
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