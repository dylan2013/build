(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group style=\"padding: 20px\">\n  <mat-tab label=\"?????????\">\n    <app-testing></app-testing>\n  </mat-tab>\n  <mat-tab label=\"???????????????\">\n    <app-speed-login></app-speed-login>\n  </mat-tab>\n  <mat-tab label=\"??????\">This123</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _speed_login_speed_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speed-login/speed-login.component */ "./src/app/speed-login/speed-login.component.ts");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _speed_login_speed_login_component__WEBPACK_IMPORTED_MODULE_6__["SpeedLoginComponent"],
                _testing_testing_component__WEBPACK_IMPORTED_MODULE_7__["TestingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/speed-login/speed-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/speed-login/speed-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWVkLWxvZ2luL3NwZWVkLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/speed-login/speed-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/speed-login/speed-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin: 20px\">\n  <br>\n  <div>???????????? 3.0 - 20210908</div>\n  <div><a href=\"assets/B62BABC4-CDE8-465F-BC7A-C0DE2ACB91EE_Dylan/develope.html\">\n    ???????????? 3.0\n  </a>(???????????? demo.h.beibei.lai,???Dylan????????????)</div>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div><a href=\"assets/5edbf8ee-d9f1-4007-acf9-0c159d04256d/develope.html?application=dev.sh_d\">\n    ??????????????????\n  </a>(???????????? dev.sh_d)</div>\n  <br>\n  <div>???????????? - 20191009 </div>\n  <div><a href=\"assets/2DCFE7E6-BA4E-4FDB-AD72-98E08762C863_Dylan/develope.html?application=dev.sh_d\">\n    ????????????(??????)\n  </a>(???????????? dev.sh_d,???Dylan????????????)</div>\n  <div><a href=\"assets/b3271aa2-f9d7-43b5-bcae-a36e058fda07_Dylan/develope.html?application=dev.sh_d\">\n    ????????????(??????)\n  </a>(???????????? dev.sh_d,???Dylan????????????)</div>\n  <div><a href=\"assets/7a29929b-6978-4ebc-be04-5eb4b8aa1fa7_Dylan/develope.html?application=dev.sh_d\">\n    ????????????(??????)\n  </a>(???????????? dev.sh_d,???Dylan????????????)</div>\n  <br>\n  <div><a href=\"assets/2DCFE7E6-BA4E-4FDB-AD72-98E08762C863_Jeffrey/develope.html?application=demo.h.jeffrey.chia\">\n    ????????????(??????)\n  </a>(???????????? demo.h.jeffrey.chia,???Dylan????????????)</div>\n  <div><a href=\"assets/b3271aa2-f9d7-43b5-bcae-a36e058fda07_Jeffrey/develope.html?application=demo.h.jeffrey.chia\">\n    ????????????(??????)\n  </a>(???????????? demo.h.jeffrey.chia,???Dylan????????????)</div>\n  <div><a href=\"assets/7a29929b-6978-4ebc-be04-5eb4b8aa1fa7_Jeffrey/develope.html?application=demo.h.jeffrey.chia\">\n    ????????????(??????)\n  </a>(???????????? demo.h.jeffrey.chia,???Dylan????????????)</div>\n  <br>\n  <div><a href=\"assets/604bbbc5-7907-4eaa-b134-e387801b1e0d_Dylan/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d,???Dylan????????????)</div>\n  <div><a href=\"assets/604bbbc5-7907-4eaa-b134-e387801b1e0d_bubu/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d,???bubu????????????)</div>\n  <br>\n  <div><a href=\"assets/c1ebfca6-f0fa-4b27-90eb-a9eaf29d7ed9_Dylan/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d,???Dylan????????????)</div>\n  <div><a href=\"assets/c1ebfca6-f0fa-4b27-90eb-a9eaf29d7ed9_bubu/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d,???bubu????????????)</div>\n</div>\n"

/***/ }),

/***/ "./src/app/speed-login/speed-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/speed-login/speed-login.component.ts ***!
  \******************************************************/
/*! exports provided: SpeedLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedLoginComponent", function() { return SpeedLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpeedLoginComponent = /** @class */ (function () {
    function SpeedLoginComponent() {
    }
    SpeedLoginComponent.prototype.ngOnInit = function () {
    };
    SpeedLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speed-login',
            template: __webpack_require__(/*! ./speed-login.component.html */ "./src/app/speed-login/speed-login.component.html"),
            styles: [__webpack_require__(/*! ./speed-login.component.css */ "./src/app/speed-login/speed-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeedLoginComponent);
    return SpeedLoginComponent;
}());



/***/ }),

/***/ "./src/app/testing/testing.component.css":
/*!***********************************************!*\
  !*** ./src/app/testing/testing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/testing/testing.component.html":
/*!************************************************!*\
  !*** ./src/app/testing/testing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex\">\n  <div style=\"flex: 1\" style=\"margin: 20px\">\n    <div>???????????? 3.0 - 20210908</div>\n    <div><a href=\"assets/B62BABC4-CDE8-465F-BC7A-C0DE2ACB91EE/develope.html\">\n      ???????????? 3.0\n    </a>(???????????? demo.h.beibei.lai)</div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <a href=\"assets/9F4D4C64-7898-495A-B3B9-4633EA156ED9/content.htm\">\n      ?????? OpenID\n    </a>(???????????? j.kh.edu.tw)<br>\n    <br>\n    <a href=\"assets/2DCFE7E6-BA4E-4FDB-AD72-98E08762C863/develope.html?application=dev.sh_d\">\n      ????????????(??????)\n    </a>(???????????? dev.sh_d)<br>\n    <a href=\"assets/b3271aa2-f9d7-43b5-bcae-a36e058fda07/develope.html?application=dev.sh_d\">\n      ????????????(??????)\n    </a>(???????????? dev.sh_d)<br>\n    <a href=\"assets/7a29929b-6978-4ebc-be04-5eb4b8aa1fa7/develope.html?application=dev.sh_d\">\n      ????????????(??????)\n    </a>(???????????? dev.sh_d)<br>\n    <br>\n    <a href=\"assets/2DCFE7E6-BA4E-4FDB-AD72-98E08762C863/develope.html?application=demo.h.vicky.chang\">\n      ????????????(??????)\n    </a>(???????????? demo.h.vicky.chang)<br>\n    <a href=\"assets/b3271aa2-f9d7-43b5-bcae-a36e058fda07/develope.html?application=demo.h.vicky.chang\">\n      ????????????(??????)\n    </a>(???????????? demo.h.vicky.chang)<br>\n    <a href=\"assets/7a29929b-6978-4ebc-be04-5eb4b8aa1fa7/develope.html?application=demo.h.vicky.chang\">\n      ????????????(??????)\n    </a>(???????????? demo.h.vicky.chang)<br>\n    <br>\n    <a href=\"assets/2DCFE7E6-BA4E-4FDB-AD72-98E08762C863/develope.html?application=demo.h.jeffrey.chia\">\n      ????????????(??????)\n    </a>(???????????? demo.h.jeffrey.chia)<br>\n    <a href=\"assets/b3271aa2-f9d7-43b5-bcae-a36e058fda07/develope.html?application=demo.h.jeffrey.chia\">\n      ????????????(??????)\n    </a>(???????????? demo.h.jeffrey.chia)<br>\n    <a href=\"assets/7a29929b-6978-4ebc-be04-5eb4b8aa1fa7/develope.html?application=demo.h.jeffrey.chia\">\n      ????????????(??????)\n    </a>(???????????? demo.h.jeffrey.chia)<br>\n  </div>\n\n  <mat-card>\n    <div style=\"flex: 1\">\n\n      ??????????????????????????????????????????????????????????????????<br>\n      ??????:<br>\n      ?????????????????????<br>\n    </div>\n  </mat-card>\n\n</div>\n\n\n<div style=\"display: flex\">\n  <div style=\"flex: 1\" style=\"margin: 20px\">\n    <a href=\"assets/604bbbc5-7907-4eaa-b134-e387801b1e0d/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d)<br>\n    <a href=\"assets/604bbbc5-7907-4eaa-b134-e387801b1e0d/index.html?application=test.sivs.chc.edu.tw\">\n      ????????????\n    </a>(???????????? test.sivs.chc.edu.tw)<br>\n    <a href=\"assets/604bbbc5-7907-4eaa-b134-e387801b1e0d/index.html?application=demo.h.vicky.chang\">\n      ????????????</a>(???????????? demo.h.vicky.chang)<br>\n  </div>\n\n  <mat-card>\n    <div style=\"flex: 1\">\n      ?????????????????????????????? ????????????????????????????????????<br>\n      ??????:<br>\n      ????????????????????????????????????,????????????,??????,?????? ????????????????????????????????????????????????<br>\n\n    </div>\n  </mat-card>\n</div>\n<br>\n<div style=\"display: flex\">\n  <div style=\"flex: 1\" style=\"margin: 20px\">\n    <a href=\"assets/c1ebfca6-f0fa-4b27-90eb-a9eaf29d7ed9/index.html?application=dev.sh_d\">\n      ????????????\n    </a>(???????????? dev.sh_d)<br>\n    <a href=\"assets/c1ebfca6-f0fa-4b27-90eb-a9eaf29d7ed9/index.html?application=demo.h.vicky.chang\">\n      ????????????\n    </a>(???????????? demo.h.vicky.chang)<br>\n  </div>\n\n  <mat-card>\n    <div style=\"flex: 1\">\n\n      ??????????????????????????????????????????????????????????????????<br>\n      ??????:<br>\n      ?????????????????? ??????????????????,??????????????????????????????<br>\n      1.[??????]?????????[????????????]???[???????????????]?????????[????????????]?????????<br>\n      2.[??????????????????]?????????[??????]????????????????????????????????????<br>\n      3.???????????????????????????,???????????????[????????????]????????????????????????<br>\n      4.??????????????????,????????????????????????,????????????????????????/??????/??????/??????...?????????\n    </div>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestingComponent = /** @class */ (function () {
    function TestingComponent() {
    }
    TestingComponent.prototype.ngOnInit = function () {
    };
    TestingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testing',
            template: __webpack_require__(/*! ./testing.component.html */ "./src/app/testing/testing.component.html"),
            styles: [__webpack_require__(/*! ./testing.component.css */ "./src/app/testing/testing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestingComponent);
    return TestingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dylan/MyJob/build/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map