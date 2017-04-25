import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { DashboardComponent }           from './+dashboard/index';
import { HomeComponent }                from './+home/index';
import { ProductComponent }             from './+product/index';
import { ValuesPipe }             from './+product/pipe';
import { NameListService, NavbarComponent, ToolbarComponent } from './shared/index';
import { EdekaService } from './services/edeka.service';

@NgModule({
  imports: [
  	BrowserModule, 
  	HttpModule,
  	FormsModule,
  	CommonModule,
  	RouterModule.forRoot([
		{
			path: '',
			component: DashboardComponent
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
		{
			path: 'product',
			component: ProductComponent
		},
		{
			path: 'product/:sku',
			component: ProductComponent
		}
	])
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		ProductComponent,
		ValuesPipe,
		NavbarComponent
	],
	providers: [
		NameListService,
		EdekaService
	],
	bootstrap: [AppComponent]

})
export class AppModule { }