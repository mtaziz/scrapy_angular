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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var index_1 = require('../shared/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
    }
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sd-home',
            templateUrl: 'app/+home/home.component.html',
            styleUrls: ['app/+home/home.component.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBV2xEO0lBVUUsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFPdkQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQTlCSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7U0FDOUIsQ0FBQzs7cUJBQUE7SUEyQkYsb0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBO0FBdkJZLHFCQUFhLGdCQXVCekIsQ0FBQSIsImZpbGUiOiJhcHAvK2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC8raG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FwcC8raG9tZS9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gIG5ld05hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxuICAgKiBOYW1lTGlzdFNlcnZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgdGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgYWRkIG1ldGhvZCBvZiB0aGUgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGN1cnJlbnRcbiAgICogbmV3TmFtZSB2YWx1ZSBvZiB0aGUgZm9ybS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmFkZCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=
