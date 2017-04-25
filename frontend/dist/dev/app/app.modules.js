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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var index_1 = require('./+dashboard/index');
var index_2 = require('./+product/index');
var index_3 = require('./shared/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [
                app_component_1.AppComponent,
                index_1.DashboardComponent,
                index_2.ProductComponent,
                index_3.NavbarComponent,
                index_3.ToolbarComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                },
                index_3.NameListService,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHVCQUE4QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2hELHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxzQkFBNkMsb0JBQW9CLENBQUMsQ0FBQTtBQUVsRSxzQkFBNkMsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRSxzQkFBbUUsZ0JBQWdCLENBQUMsQ0FBQTtBQW1CcEY7SUFBQTtJQUF5QixDQUFDO0lBakIxQjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsaUJBQVUsQ0FBQztZQUNwQyxZQUFZLEVBQUU7Z0JBQ2IsNEJBQVk7Z0JBQ1osMEJBQWtCO2dCQUNsQix3QkFBZ0I7Z0JBQ2hCLHVCQUFlO2dCQUNmLHdCQUFnQixDQUFDO1lBQ2xCLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0EsdUJBQWU7YUFDZjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FFMUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgICAgICAgICBmcm9tICcuLytkYXNoYm9hcmQvaW5kZXgnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICAgICAgICAgICAgICAgIGZyb20gJy4vK2hvbWUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9ICAgICAgICAgICAgIGZyb20gJy4vK3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gIFx0QXBwQ29tcG9uZW50LFxuICBcdERhc2hib2FyZENvbXBvbmVudCxcbiAgXHRQcm9kdWN0Q29tcG9uZW50LFxuICBcdE5hdmJhckNvbXBvbmVudCxcbiAgXHRUb29sYmFyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gIH0sXG4gIFx0TmFtZUxpc3RTZXJ2aWNlLFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==
