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
var core_1 = require('@angular/core');
var edeka_service_1 = require('../services/edeka.service');
var DashboardComponent = (function () {
    function DashboardComponent(edekaService) {
        var _this = this;
        this.edekaService = edekaService;
        this.edekaService
            .getScrapedData()
            .subscribe(function (p) {
            _this.scrapedData = JSON.parse(p['resultData']);
            _this.totalData = _this.scrapedData.length;
        });
    }
    DashboardComponent.prototype.onStartScrapy = function () {
        var _this = this;
        this.edekaService.postStartScrapy().subscribe(function (p) { console.log("POST_EDEKA: ", p); });
        this.interId = setInterval(function () {
            _this.edekaService.getScrapedData().subscribe(function (p) {
                console.log("Scraped_EDEKA: ", JSON.parse(p['resultData']));
                _this.scrapedData = JSON.parse(p['resultData']);
                _this.totalData = _this.scrapedData.length;
                _this.scrapyStatus = p['scrapyStatus'];
                console.log("status: ", _this.scrapyStatus);
                if (_this.scrapyStatus === 'finished') {
                    clearInterval(_this.interId);
                }
            });
        }, 1000);
    };
    DashboardComponent.prototype.onEndScrapy = function () {
        this.edekaService.postEndScrapy().subscribe(function (p) { console.log("End Service: ", p); });
        clearInterval(this.interId);
    };
    DashboardComponent.prototype.productDetail = function (sku) {
        console.log("SSS: ", sku);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'sd-dashboard',
            templateUrl: 'app/+dashboard/dashboard.component.html',
            styleUrls: ['app/+dashboard/dashboard.component.css'],
            providers: [edeka_service_1.EdekaService]
        }), 
        __metadata('design:paramtypes', [edeka_service_1.EdekaService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyw4QkFBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQVczRDtJQU1DLDRCQUFvQixZQUEwQjtRQU4vQyxpQkFrREM7UUE1Q29CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRzdDLElBQUksQ0FBQyxZQUFZO2FBQ2YsY0FBYyxFQUFFO2FBQ2hCLFNBQVMsQ0FBQyxVQUFDLENBQUs7WUFFaEIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFMUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQWEsR0FBYjtRQUFBLGlCQXFCQztRQW5CQSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUssSUFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFFO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBSztnQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDekMsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFM0MsRUFBRSxDQUFDLENBQUUsS0FBSSxDQUFDLFlBQVksS0FBSyxVQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxhQUFhLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0YsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLEVBRUQsSUFBSSxDQUNKLENBQUM7SUFFSCxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBSyxJQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0YsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQWEsR0FBYixVQUFjLEdBQVE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTFERjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQzs7MEJBQUE7SUFzREYseUJBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLDBCQUFrQixxQkFrRDlCLENBQUEiLCJmaWxlIjoiYXBwLytkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IFx0XHRcdGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWRla2FTZXJ2aWNlIH1cdFx0XHRmcm9tICcuLi9zZXJ2aWNlcy9lZGVrYS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2QtZGFzaGJvYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvK2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLytkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRWRla2FTZXJ2aWNlXVxufSlcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBEYXNoYm9hcmRDb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xuXHRzY3JhcGVkRGF0YTogYW55W107XG5cdHRvdGFsRGF0YTogbnVtYmVyO1xuXHRpbnRlcklkOiBhbnk7XG5cdHNjcmFweVN0YXR1czogYW55O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWRla2FTZXJ2aWNlOiBFZGVrYVNlcnZpY2UpIHtcblx0XHQvLyB0aGlzLmVkZWthU2VydmljZS5nZXRQcm9kdWN0RnJvbURCKCkuc3Vic2NyaWJlKChwOmFueSkgPT4geyBjb25zb2xlLmxvZyhcIkJCQkI6IFwiLCBwWzBdKTsgfSk7XG5cblx0XHR0aGlzLmVkZWthU2VydmljZVxuXHRcdFx0LmdldFNjcmFwZWREYXRhKClcblx0XHRcdC5zdWJzY3JpYmUoKHA6YW55KSA9PiB7IFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNjcmFwZWRfRURFS0E6IFwiLCBPYmplY3QudmFsdWVzKEpTT04ucGFyc2UocFsncmVzdWx0RGF0YSddKSkpO1xuXHRcdFx0XHR0aGlzLnNjcmFwZWREYXRhID0gSlNPTi5wYXJzZShwWydyZXN1bHREYXRhJ10pO1xuXHRcdFx0XHR0aGlzLnRvdGFsRGF0YSA9IHRoaXMuc2NyYXBlZERhdGEubGVuZ3RoO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnZGF0YTogJywgcFsncmVzdWx0RGF0YSddKTtcblx0XHRcdH0pO1xuXHR9XHRcblxuXHRvblN0YXJ0U2NyYXB5KCkge1xuXHRcdC8vIHRoaXMuZWRla2FTZXJ2aWNlLmdldEZvb2RzKCkuc3Vic2NyaWJlKChwOmFueSkgPT4geyBjb25zb2xlLmxvZyhcIjExMUVERUtBOiBcIiwgcCk7IH0pO1xuXHRcdHRoaXMuZWRla2FTZXJ2aWNlLnBvc3RTdGFydFNjcmFweSgpLnN1YnNjcmliZSgocDphbnkpID0+IHsgY29uc29sZS5sb2coXCJQT1NUX0VERUtBOiBcIiwgcCk7IH0pO1xuXHRcdFxuXHRcdHRoaXMuaW50ZXJJZCA9IHNldEludGVydmFsKCAoKSA9PiB7XG5cdFx0XHR0aGlzLmVkZWthU2VydmljZS5nZXRTY3JhcGVkRGF0YSgpLnN1YnNjcmliZSgocDphbnkpID0+IHsgXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiU2NyYXBlZF9FREVLQTogXCIsIEpTT04ucGFyc2UocFsncmVzdWx0RGF0YSddKSk7XG5cdFx0XHRcdFx0dGhpcy5zY3JhcGVkRGF0YSA9IEpTT04ucGFyc2UocFsncmVzdWx0RGF0YSddKTtcblx0XHRcdFx0XHR0aGlzLnRvdGFsRGF0YSA9IHRoaXMuc2NyYXBlZERhdGEubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuc2NyYXB5U3RhdHVzID0gcFsnc2NyYXB5U3RhdHVzJ107XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJzdGF0dXM6IFwiLCB0aGlzLnNjcmFweVN0YXR1cyk7XG5cblx0XHRcdFx0XHRpZiAoIHRoaXMuc2NyYXB5U3RhdHVzID09PSAnZmluaXNoZWQnICkge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVySWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdCxcblx0XHRcdDEwMDBcblx0XHQpO1xuXHRcblx0fVxuXG5cdG9uRW5kU2NyYXB5KCkge1xuXHRcdHRoaXMuZWRla2FTZXJ2aWNlLnBvc3RFbmRTY3JhcHkoKS5zdWJzY3JpYmUoKHA6YW55KSA9PiB7IGNvbnNvbGUubG9nKFwiRW5kIFNlcnZpY2U6IFwiLCBwKTsgfSk7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVySWQpO1xuXHR9XG5cblx0cHJvZHVjdERldGFpbChza3U6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKFwiU1NTOiBcIiwgc2t1KTtcblx0fVxufSJdfQ==
