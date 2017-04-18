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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var index_3 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [index_3.NameListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_3.NavbarComponent, index_3.ToolbarComponent]
        }),
        router_1.Routes([
            {
                path: '/',
                component: index_2.HomeComponent
            },
            {
                path: '/about',
                component: index_1.AboutComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLHNCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5QyxzQkFBbUUsZ0JBQWdCLENBQUMsQ0FBQTtBQXdCcEY7SUFBQTtJQUEyQixDQUFDO0lBdEI1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsQ0FBQyx1QkFBZSxFQUFFLHFCQUFjLENBQUM7WUFDaEQsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO1NBQ25FLENBQUM7UUFDRCxlQUFNLENBQUM7WUFDTjtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxTQUFTLEVBQUUscUJBQWE7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsc0JBQWM7YUFDMUI7U0FDRixDQUFDOztvQkFBQTtJQU95QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vK2Fib3V0L2luZGV4JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLytob21lL2luZGV4JztcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSwgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XVxufSlcbkBSb3V0ZXMoW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgY29tcG9uZW50OiBBYm91dENvbXBvbmVudFxuICB9XG5dKVxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICogV2l0aGluIHRoZSBAUm91dGVzIGFubm90YXRpb24gaXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlXG4gKiBhcHBsaWNhdGlvbnMgcm91dGVzLCBjb25maWd1cmluZyB0aGUgcGF0aHMgZm9yIHRoZSBsYXp5XG4gKiBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgQWJvdXRDb21wb25lbnQpLlxuICovXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4iXX0=
