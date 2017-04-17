"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var produkte_component_1 = require("./produkte.component");
var preise_component_1 = require("./preise.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'produkte', component: produkte_component_1.ProdukteComponent },
    { path: 'preise', component: preise_component_1.PreiseComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map