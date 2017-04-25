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
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var index_1 = require('./+dashboard/index');
var index_2 = require('./+product/index');
var pipe_1 = require('./+product/pipe');
var index_3 = require('./shared/index');
var edeka_service_1 = require('./services/edeka.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: index_1.DashboardComponent
                    },
                    {
                        path: 'dashboard',
                        component: index_1.DashboardComponent
                    },
                    {
                        path: 'product',
                        component: index_2.ProductComponent
                    },
                    {
                        path: 'product/:sku',
                        component: index_2.ProductComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.DashboardComponent,
                index_2.ProductComponent,
                pipe_1.ValuesPipe,
                index_3.NavbarComponent
            ],
            providers: [
                index_3.NameListService,
                edeka_service_1.EdekaService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsc0JBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQTRDLGlCQUFpQixDQUFDLENBQUE7QUFDOUQscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLHNCQUE2QyxvQkFBb0IsQ0FBQyxDQUFBO0FBRWxFLHNCQUE2QyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ2hFLHFCQUF1QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pELHNCQUFtRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3BGLDhCQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBeUN4RDtJQUFBO0lBQXlCLENBQUM7SUF2QzFCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNSLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLG1CQUFXO2dCQUNYLHFCQUFZO2dCQUNaLHFCQUFZLENBQUMsT0FBTyxDQUFDO29CQUN0Qjt3QkFDQyxJQUFJLEVBQUUsRUFBRTt3QkFDUixTQUFTLEVBQUUsMEJBQWtCO3FCQUM3QjtvQkFDRDt3QkFDQyxJQUFJLEVBQUUsV0FBVzt3QkFDakIsU0FBUyxFQUFFLDBCQUFrQjtxQkFDN0I7b0JBQ0Q7d0JBQ0MsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLHdCQUFnQjtxQkFDM0I7b0JBQ0Q7d0JBQ0MsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFNBQVMsRUFBRSx3QkFBZ0I7cUJBQzNCO2lCQUNELENBQUM7YUFDRDtZQUNELFlBQVksRUFBRTtnQkFDYiw0QkFBWTtnQkFDWiwwQkFBa0I7Z0JBQ2xCLHdCQUFnQjtnQkFDaEIsaUJBQVU7Z0JBQ1YsdUJBQWU7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDVix1QkFBZTtnQkFDZiw0QkFBWTthQUNaO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUV6QixDQUFDOztpQkFBQTtJQUN1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGLCBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgICAgICAgICBmcm9tICcuLytkYXNoYm9hcmQvaW5kZXgnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICAgICAgICAgICAgICAgIGZyb20gJy4vK2hvbWUvaW5kZXgnO1xuaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9ICAgICAgICAgICAgIGZyb20gJy4vK3Byb2R1Y3QvaW5kZXgnO1xuaW1wb3J0IHsgVmFsdWVzUGlwZSB9ICAgICAgICAgICAgIGZyb20gJy4vK3Byb2R1Y3QvcGlwZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEVkZWthU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZWRla2Euc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXHRCcm93c2VyTW9kdWxlLCBcbiAgXHRIdHRwTW9kdWxlLFxuICBcdEZvcm1zTW9kdWxlLFxuICBcdENvbW1vbk1vZHVsZSxcbiAgXHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG5cdFx0e1xuXHRcdFx0cGF0aDogJycsXG5cdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJ2Rhc2hib2FyZCcsXG5cdFx0XHRjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0aDogJ3Byb2R1Y3QnLFxuXHRcdFx0Y29tcG9uZW50OiBQcm9kdWN0Q29tcG9uZW50XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXRoOiAncHJvZHVjdC86c2t1Jyxcblx0XHRcdGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudFxuXHRcdH1cblx0XSlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QXBwQ29tcG9uZW50LFxuXHRcdERhc2hib2FyZENvbXBvbmVudCxcblx0XHRQcm9kdWN0Q29tcG9uZW50LFxuXHRcdFZhbHVlc1BpcGUsXG5cdFx0TmF2YmFyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdE5hbWVMaXN0U2VydmljZSxcblx0XHRFZGVrYVNlcnZpY2Vcblx0XSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=
