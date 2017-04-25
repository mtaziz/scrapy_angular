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
var router_1 = require('@angular/router');
var ProductComponent = (function () {
    function ProductComponent(edekaService, route) {
        var _this = this;
        this.edekaService = edekaService;
        this.route = route;
        this.apiAllData = [];
        this.apiCurrentData = { weight: '' };
        var object = this.edekaService.getStorage();
        this.scrapedData = JSON.parse(object['resultData']);
        this.apiAllData = this.edekaService.getApiAllData();
        if (this.apiAllData.length == 0) {
            this.edekaService.getProductFromDB()
                .subscribe(function (p) {
                _this.edekaService.setApiAllData(p);
                _this.apiCurrentData = p.find(function (obj) { return obj.id === '00001' + _this.currentData.sku; });
                console.log("+++++++++++++++++++++++++++++++");
                console.log("API: ", _this.apiCurrentData.nutrients);
            });
        }
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sku;
        this.route.params.forEach(function (params) {
            sku = params['sku'];
        });
        console.log("ID: ", typeof sku);
        if (sku == undefined) {
            console.log("Id is nll");
            this.currentData = this.scrapedData[0];
            this.apiCurrentData = this.apiAllData.find(function (obj) { return obj.id === '00001' + _this.currentData.sku; })
                || { weight: '', brand: '', description: '', manufacturer: '' };
            this.nutrients = JSON.parse(this.currentData['nutrients']);
        }
        else {
            console.log("ND: ", sku);
            this.currentData = this.scrapedData.find(function (obj) { return obj.sku === sku; });
            this.apiCurrentData = this.apiAllData.find(function (obj) { return obj.id === '00001' + _this.currentData.sku; });
            this.nutrients = JSON.parse(this.currentData['nutrients']);
            console.log('CDE: ', this.currentData);
        }
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'sd-product',
            templateUrl: 'app/+product/product.component.html',
            styleUrls: ['app/+product/product.component.css'],
        }), 
        __metadata('design:paramtypes', [edeka_service_1.EdekaService, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDhCQUErQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzNELHVCQUF5QyxpQkFBaUIsQ0FBQyxDQUFBO0FBWTNEO0lBUUMsMEJBQW9CLFlBQTBCLEVBQVUsS0FBcUI7UUFSOUUsaUJBd0RDO1FBaERvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSjdFLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFFckIsbUJBQWMsR0FBUSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUluQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFcEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQy9CLENBQUM7WUFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO2lCQUNsQyxTQUFTLENBQUMsVUFBQyxDQUFLO2dCQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakMsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLEdBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQXZDLENBQXVDLENBQUMsQ0FBQztnQkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNGLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBMEJDO1FBekJBLElBQUksR0FBUSxDQUFDO1FBRVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUN4QyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQXpDLENBQXlDLENBQUM7bUJBQy9GLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFekQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFmLENBQWUsQ0FBQyxDQUFDO1lBRXhFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQU8sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1lBRXBHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7SUFDTCxDQUFDO0lBL0RGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7U0FDbEQsQ0FBQzs7d0JBQUE7SUE0REYsdUJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLHdCQUFnQixtQkF3RDVCLENBQUEiLCJmaWxlIjoiYXBwLytwcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfVx0ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFZGVrYVNlcnZpY2UgfVx0XHRcdGZyb20gJy4uL3NlcnZpY2VzL2VkZWthLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IFx0XHRmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHtEUk9QRE9XTl9ESVJFQ1RJVkVTfSBcdGZyb20gJ25nMi1icy1kcm9wZG93bic7XG4vLyBpbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9ICAgXHRmcm9tICcuLi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1wcm9kdWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAvK3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAvK3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzJ10sXG59KVxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIFByb2R1Y3RDb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0c2NyYXBlZERhdGE6IGFueVtdO1xuXHR0b3RhbERhdGE6IGFueTtcblx0Y3VycmVudERhdGE6IGFueTtcblx0YXBpQWxsRGF0YTogYW55ID0gW107XG5cdG51dHJpZW50czogYW55O1xuXHRhcGlDdXJyZW50RGF0YTogYW55ID0geyB3ZWlnaHQ6ICcnfTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVkZWthU2VydmljZTogRWRla2FTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuXG5cdFx0dmFyIG9iamVjdCA9IHRoaXMuZWRla2FTZXJ2aWNlLmdldFN0b3JhZ2UoKTtcblx0XHRcblx0XHR0aGlzLnNjcmFwZWREYXRhID0gSlNPTi5wYXJzZShvYmplY3RbJ3Jlc3VsdERhdGEnXSk7XG5cblx0XHR0aGlzLmFwaUFsbERhdGEgPSB0aGlzLmVkZWthU2VydmljZS5nZXRBcGlBbGxEYXRhKCk7XG5cblx0XHRpZih0aGlzLmFwaUFsbERhdGEubGVuZ3RoID09IDApXG5cdFx0e1x0XG5cdFx0XHR0aGlzLmVkZWthU2VydmljZS5nZXRQcm9kdWN0RnJvbURCKClcblx0XHRcdFx0LnN1YnNjcmliZSgocDphbnkpID0+IHsgXG5cdFx0XHRcdFx0dGhpcy5lZGVrYVNlcnZpY2Uuc2V0QXBpQWxsRGF0YShwKTtcblxuXHQgIFx0XHRcdFx0dGhpcy5hcGlDdXJyZW50RGF0YSA9IHAuZmluZCgob2JqOiBhbnkpID0+IG9iai5pZCA9PT0gJzAwMDAxJyt0aGlzLmN1cnJlbnREYXRhLnNrdSk7XG5cdCAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcIik7XG5cdCAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIkFQSTogXCIsIHRoaXMuYXBpQ3VycmVudERhdGEubnV0cmllbnRzKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0bGV0IHNrdTogYW55O1xuXG5cdCAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuXHQgICAgXHRza3UgPSBwYXJhbXNbJ3NrdSddO1xuXHQgICAgfSk7XG5cblx0XHRjb25zb2xlLmxvZyhcIklEOiBcIiwgdHlwZW9mIHNrdSk7XG5cblx0ICAgIGlmIChza3UgPT0gdW5kZWZpbmVkKSB7XG5cdCAgICBcdGNvbnNvbGUubG9nKFwiSWQgaXMgbmxsXCIpO1xuXHQgICAgXHR0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5zY3JhcGVkRGF0YVswXTtcblxuXHQgICAgXHR0aGlzLmFwaUN1cnJlbnREYXRhID0gdGhpcy5hcGlBbGxEYXRhLmZpbmQoKG9iajogYW55KSA9PiBvYmouaWQgPT09ICcwMDAwMScgKyB0aGlzLmN1cnJlbnREYXRhLnNrdSlcblx0ICAgIFx0XHR8fCB7IHdlaWdodDogJycsIGJyYW5kOiAnJywgZGVzY3JpcHRpb246ICcnLCBtYW51ZmFjdHVyZXI6ICcnfTtcblx0XHRcdHRoaXMubnV0cmllbnRzID0gSlNPTi5wYXJzZSh0aGlzLmN1cnJlbnREYXRhWydudXRyaWVudHMnXSk7XG5cblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdGNvbnNvbGUubG9nKFwiTkQ6IFwiLCBza3UpO1xuXHQgICAgXHR0aGlzLmN1cnJlbnREYXRhID0gdGhpcy5zY3JhcGVkRGF0YS5maW5kKChvYmo6IGFueSkgPT4gb2JqLnNrdSA9PT0gc2t1KTtcblxuXHQgICAgXHR0aGlzLmFwaUN1cnJlbnREYXRhID0gdGhpcy5hcGlBbGxEYXRhLmZpbmQoKG9iajogYW55KSA9PiBvYmouaWQgPT09ICcwMDAwMScgKyB0aGlzLmN1cnJlbnREYXRhLnNrdSk7XG5cblx0ICAgIFx0dGhpcy5udXRyaWVudHMgPSBKU09OLnBhcnNlKHRoaXMuY3VycmVudERhdGFbJ251dHJpZW50cyddKTtcblx0ICAgIFx0Y29uc29sZS5sb2coJ0NERTogJywgdGhpcy5jdXJyZW50RGF0YSlcblx0ICAgIH1cblx0fVxufVxuXG5cbiJdfQ==
