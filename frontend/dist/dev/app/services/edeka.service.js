"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var EdekaService = (function () {
    function EdekaService(http) {
        this.http = http;
        this.apiAllData = [];
    }
    EdekaService.prototype.getFoods = function () {
        return this.http.get('http://localhost:8000/dashboard').map(function (res) { return res.json(); });
    };
    EdekaService.prototype.postStartScrapy = function () {
        console.log("FSDFSFSF");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/dashboard', JSON.stringify({ "flagStart": 1 }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EdekaService.prototype.postEndScrapy = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/dashboard', JSON.stringify({ "flagStart": 0 }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EdekaService.prototype.getScrapedData = function () {
        return this.http.get('http://localhost:8000/dashboard')
            .map(function (res) { return res.json(); })
            .do(function (data) {
            localStorage.setItem('temp', JSON.stringify(data));
        });
    };
    EdekaService.prototype.getStorage = function () {
        if (localStorage.getItem('temp') == null)
            return {};
        return JSON.parse(localStorage.getItem('temp'));
    };
    EdekaService.prototype.getProductFromDB = function () {
        console.log('Here DB');
        return this.http.get('http://checkoutserviceenvironment.wswvg3payj.eu-central-1.elasticbeanstalk.com/productdescriptions')
            .map(function (res) { return res.json(); })
            .do(function (data) {
            console.log("db: ", data);
        });
    };
    EdekaService.prototype.getDataAPI = function () {
        if (localStorage.getItem('apiData') == null)
            return {};
        return JSON.parse(localStorage.getItem('apiData'));
    };
    EdekaService.prototype.getBooksAndMovies = function () {
        return Rx_1.Observable.forkJoin(this.http.get('/app/books.json').map(function (res) { return res.json(); }), this.http.get('/app/movies.json').map(function (res) { return res.json(); }));
    };
    EdekaService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    EdekaService.prototype.getApiAllData = function () {
        return this.apiAllData;
    };
    EdekaService.prototype.setApiAllData = function (data) {
        this.apiAllData = data;
    };
    EdekaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EdekaService);
    return EdekaService;
}());
exports.EdekaService = EdekaService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9lZGVrYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0MsZUFBZSxDQUFDLENBQUE7QUFDL0QscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLG1CQUE4QixTQUFTLENBQUMsQ0FBQTtBQUN4QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyw2QkFBNkIsQ0FBQyxDQUFBO0FBR3JDO0lBS0Usc0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBRjdCLGVBQVUsR0FBUSxFQUFFLENBQUM7SUFPckIsQ0FBQztJQUlELCtCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFdBQVcsRUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRSxDQUFDO2FBQ2pILEdBQUcsQ0FBQyxVQUFDLEdBQVksSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxF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TUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELG9DQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQVM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQWxHTDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBbUdiLG1CQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTtBQWxHWSxvQkFBWSxlQWtHeEIsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvZWRla2Euc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIEpzb25wLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IFx0XHRcdGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IFx0XHRcdGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWRla2FTZXJ2aWNlIHtcbiAgdGVtcDogYW55W107XG5cbiAgYXBpQWxsRGF0YTogYW55ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApIHsgXG4gICAgLy8gdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIHRoaXMuXG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgfVxuICAvLyBVc2VzIGh0dHAuZ2V0KCkgdG8gbG9hZCBhIHNpbmdsZSBKU09OIGZpbGVcbiAgXG5cbiAgZ2V0Rm9vZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmQnKS5tYXAoKHJlczpSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBwb3N0U3RhcnRTY3JhcHkoKSB7XG4gICAgY29uc29sZS5sb2coXCJGU0RGU0ZTRlwiKTtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmQnLCBKU09OLnN0cmluZ2lmeSh7IFwiZmxhZ1N0YXJ0XCIgOiAxIH0pLCB7IGhlYWRlcnMgOiBoZWFkZXJzIH0pXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgcG9zdEVuZFNjcmFweSgpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmQnLCBKU09OLnN0cmluZ2lmeSh7IFwiZmxhZ1N0YXJ0XCIgOiAwIH0pLCB7IGhlYWRlcnMgOiBoZWFkZXJzIH0pXG4gICAgICAubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG5cbiAgZ2V0U2NyYXBlZERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmQnKVxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmRvKChkYXRhKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RlbXAnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldFN0b3JhZ2UoKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXAnKSA9PSBudWxsKVxuICAgICAgcmV0dXJuIHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKFwiU3Ryb2dhZzogXCIsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RlbXAnKSkpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZW1wJykpO1xuXG4gIH1cblxuICBnZXRQcm9kdWN0RnJvbURCKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZXJlIERCJylcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2NoZWNrb3V0c2VydmljZWVudmlyb25tZW50Lndzd3ZnM3BheWouZXUtY2VudHJhbC0xLmVsYXN0aWNiZWFuc3RhbGsuY29tL3Byb2R1Y3RkZXNjcmlwdGlvbnMnKVxuICAgICAgLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgLmRvKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGI6IFwiLCBkYXRhKVxuICAgICAgfSk7XG4gIH1cblxuICBnZXREYXRhQVBJKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdIZXJlIEFQSScpXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwaURhdGEnKSA9PSBudWxsKVxuICAgICAgcmV0dXJuIHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdBUEk6ICcsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwaURhdGEnKSkpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcGlEYXRhJykpO1xuICB9XG5cbiAgLy8gZ2V0UmVhbERhdGEocmVzOmFueSkge1xuICAvLyAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgLy8gICByZXR1cm4gYm9keSB8fCB7fTtcbiAgLy8gfVxuICAvLyBVc2VzIE9ic2VydmFibGUuZm9ya0pvaW4oKSB0byBydW4gbXVsdGlwbGUgY29uY3VycmVudCBodHRwLmdldCgpIHJlcXVlc3RzLlxuICAvLyBUaGUgZW50aXJlIG9wZXJhdGlvbiB3aWxsIHJlc3VsdCBpbiBhbiBlcnJvciBzdGF0ZSBpZiBhbnkgc2luZ2xlIHJlcXVlc3QgZmFpbHMuXG4gIGdldEJvb2tzQW5kTW92aWVzKCkge1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmZvcmtKb2luKFxuICAgICAgdGhpcy5odHRwLmdldCgnL2FwcC9ib29rcy5qc29uJykubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpLFxuICAgICAgdGhpcy5odHRwLmdldCgnL2FwcC9tb3ZpZXMuanNvbicpLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogYW55KSB7XG4gICAgICAgIC8vIEluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1pZ2h0IHVzZSBhIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgICAgIC8vIFdlJ2QgYWxzbyBkaWcgZGVlcGVyIGludG8gdGhlIGVycm9yIHRvIGdldCBhIGJldHRlciBtZXNzYWdlXG4gICAgICAgIGxldCBlcnJNc2cgPSAoZXJyb3IubWVzc2FnZSkgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICAgICAgIGVycm9yLnN0YXR1cyA/IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHR9YCA6ICdTZXJ2ZXIgZXJyb3InO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgICB9XG5cblxuICAgIGdldEFwaUFsbERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcGlBbGxEYXRhO1xuICAgIH1cblxuICAgIHNldEFwaUFsbERhdGEoZGF0YTogYW55ICkge1xuICAgICAgdGhpcy5hcGlBbGxEYXRhID0gZGF0YTtcbiAgICB9XG59Il19
