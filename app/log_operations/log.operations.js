System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
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
    var core_1, http_1, Observable_1, http_2;
    var LogOperations;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            LogOperations = (function () {
                function LogOperations(http) {
                    this.http = http;
                    this.arrData = [];
                    this.addGarbageData();
                }
                LogOperations.prototype.ngOnInit = function () {
                    debugger;
                    this.http.get("http://localhost:60416/api/values")
                        .map(function () { return function (res) {
                        debugger;
                        res.json();
                    }; }).catch(this.handleError)
                        .subscribe(function () { return function (data) {
                        debugger;
                        for (var i = 0; i < data.length; i++) {
                            this.arrBackendDatas.push({
                                operationName: data[i],
                                date: data[i]
                            });
                        }
                        this.arrBackendData = data;
                    }; });
                };
                LogOperations.prototype.handleError = function (error) {
                    debugger;
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                LogOperations.prototype.getSignleGarbageData = function (data) {
                    var tempData = {};
                    tempData.operationName = data.operationName;
                    tempData.date = data.date;
                    return tempData;
                };
                LogOperations.prototype.addGarbageData = function () {
                    var data1 = this.getSignleGarbageData({
                        operationName: "Liran",
                        date: "1316546"
                    });
                    var data2 = this.getSignleGarbageData({
                        operationName: "Ziv",
                        date: "123123"
                    });
                    this.arrData.push(data1, data2);
                };
                LogOperations = __decorate([
                    core_1.Component({
                        selector: 'log-operation',
                        templateUrl: 'app/log_operations/log.operations.html',
                        providers: [
                            http_2.HTTP_PROVIDERS
                        ]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LogOperations);
                return LogOperations;
            })();
            exports_1("LogOperations", LogOperations);
        }
    }
});
//# sourceMappingURL=log.operations.js.map