import { provideRouter, RouterConfig } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ProdukteComponent} from "./produkte.component";
import {PreiseComponent} from "./preise.component";


const routes: RouterConfig = [
  {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produkte', component: ProdukteComponent },
  { path: 'preise', component: PreiseComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
