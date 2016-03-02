System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                    this.arrBackendData = [];
                }
                LogOperations.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.get("http://localhost:60416/api/values")
                        .map(function (res) {
                        debugger;
                        return res.json();
                    })
                        .catch(this.handleError)
                        .subscribe(function (res) {
                        debugger;
                        _this.arrBackendData = res;
                        debugger;
                        var tableWrapper = document.querySelector('table-wrapper');
                        tableWrapper.getTableElement().reload();
                        console.log(res);
                    });
                };
                LogOperations.prototype.handleError = function (error) {
                    debugger;
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
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