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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api";
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getBooks = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBook = function (data) {
        console.log(data);
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBook = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBook = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book-create/book-create.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'shakha-mahiti',
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
        data: { title: 'Book List' }
    },
    {
        path: 'add-shakha-mahiti',
        component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_7__["BookCreateComponent"],
        data: { title: 'Create Book' }
    },
    {
        path: '',
        component: _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_7__["BookCreateComponent"],
        data: { title: 'Create Book' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"],
                _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_7__["BookCreateComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-create/book-create.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n.form{\n  padding: 10px;\n  background-color: #ffc299;\n}\n"

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-create/book-create.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/books']\"><mat-icon>list</mat-icon></a>\n</div> -->\n<form [formGroup]=\"bookForm\" class=\"form\" (ngSubmit)=\"onFormSubmit(bookForm.value)\">\n  <h3>शिवसेना शाखा माहिती </h3>\n  <!-- TODO : Remove this from DB as well\n -->\n  <!-- <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"शाखा क़मांक\" formControlName=\"shakhaKramank\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaKramank').valid && bookForm.get('shakhaKramank').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field> -->\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"शाखा गाव\" formControlName=\"shakhaGaw\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaGaw').valid && bookForm.get('shakhaGaw').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"शाखा प्रमुख नाव\" formControlName=\"shakhaPramukhNaw\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaPramukhNaw').valid && bookForm.get('shakhaPramukhNaw').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"शाखा प्रमुख मोबाईल क़मांक\" formControlName=\"shakhaPramukhMobile\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaPramukhMobile').valid && bookForm.get('shakhaPramukhMobile').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\" >\n    <input matInput placeholder=\"शाखा उप प्रमुख नाव\" formControlName=\"shakhaUpPramukhNaw\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaUpPramukhNaw').valid && bookForm.get('shakhaUpPramukhNaw').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"शाखा उप प्रमुख मोबाईल क़मांक\" formControlName=\"shakhaUpPramukhMobile\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!bookForm.get('shakhaUpPramukhMobile').valid && bookForm.get('shakhaUpPramukhMobile').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n\n  <div formArrayName=\"boothDetails\">\n      <div *ngFor=\"let item of boothDetails.controls; let pointIndex=index\" [formGroupName]=\"pointIndex\" >\n      <h3>बूथ प्रमुख {{pointIndex+1}}: </h3>\n      <div >\n          <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"नाव\" formControlName=\"boothName\">\n                     <!-- [errorStateMatcher]=\"matcher\"> -->\n              <!-- <mat-error>\n                <span *ngIf=\"!bookForm.get('boothDetails.boothName').valid && bookForm.get('boothDetails.boothName').touched\">कृपया हे भरा</span>\n              </mat-error> -->\n            </mat-form-field>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"मोबाईल क़मांक\" formControlName=\"boothMoNumber\">\n                       <!-- [errorStateMatcher]=\"matcher\" -->\n                <!-- <mat-error>\n                  <span *ngIf=\"!bookForm.get('boothMoNumber').valid && bookForm.get('boothMoNumber').touched\">कृपया हे भरा</span>\n                </mat-error> -->\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"बूथ क़मांक: \" formControlName=\"boothNumber\">\n                         <!-- [errorStateMatcher]=\"matcher\" -->\n                  <!-- <mat-error>\n                    <span *ngIf=\"!bookForm.get('boothNumber').valid && bookForm.get('boothNumber').touched\">कृपया हे भरा</span>\n                  </mat-error> -->\n                </mat-form-field>    \n                <mat-card-actions>\n                  <a mat-raised-button color=\"warn\" (click)=\"deleteCompany(i)\"><mat-icon>delete</mat-icon></a>\n                </mat-card-actions> \n      </div>\n    </div>\n  </div> \n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" (click)=\"addNewCompany()\"><mat-icon>add</mat-icon></a>\n  </mat-card-actions> \n\n  <div formArrayName=\"sadasyaDetails\">\n      <div *ngFor=\"let item of sadasyaDetails.controls; let sadasyaIndex=index\" [formGroupName]=\"sadasyaIndex\" >\n        <h3>सदस्य {{sadasyaIndex+1}}: </h3>\n        <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"नाव\" formControlName=\"sadasyaName\">\n                       <!-- [errorStateMatcher]=\"matcher\">\n                <mat-error>\n                  <span *ngIf=\"!bookForm.get('sadasyaName').valid && bookForm.get('sadasyaName').touched\">कृपया हे भरा</span>\n                </mat-error> -->\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"मोबाईल क़मांक\" formControlName=\"sadasyaMoNumber\">\n                         <!-- [errorStateMatcher]=\"matcher\">\n                  <mat-error>\n                    <span *ngIf=\"!bookForm.get('sadasyaMoNumber').valid && bookForm.get('sadasyaMoNumber').touched\">कृपया हे भरा</span>\n                  </mat-error> -->\n                </mat-form-field>    \n                <mat-card-actions>\n                  <a mat-raised-button color=\"warn\" (click)=\"deleteSadasya(i)\"><mat-icon>delete</mat-icon></a>\n                </mat-card-actions>\n        </div>\n      </div>\n    </div> \n    <mat-card-actions>\n      <a mat-raised-button color=\"primary\" (click)=\"addNewSadasya()\"><mat-icon>add</mat-icon></a>\n    </mat-card-actions>  \n\n<div class=\"form-group\">\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!bookForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-create/book-create.component.ts ***!
  \******************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {Inject} from '@angular/core';
var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.shakhaKramank = '';
        this.shakhaGaw = '';
        this.shakhaPramukhMobile = '';
        this.shakhaPramukhNaw = '';
        this.shakhaUpPramukhNaw = '';
        this.shakhaUpPramukhMobile = '';
        this.boothName = '';
        this.boothMoNumber = '';
        this.boothNumber = '';
        this.sadasyaName = '';
        this.sadasyaMoNumber = '';
    }
    BookCreateComponent.prototype.ngOnInit = function () {
        this.bookForm = this.formBuilder.group({
            // 'shakhaKramank' : [null, Validators.required],
            'shakhaGaw': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'shakhaPramukhNaw': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'shakhaPramukhMobile': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'shakhaUpPramukhNaw': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'shakhaUpPramukhMobile': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'boothDetails': this.formBuilder.array([
                this.formBuilder.group({
                    'boothName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    'boothMoNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    'boothNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                })
            ]),
            'sadasyaDetails': this.formBuilder.array([
                this.formBuilder.group({
                    'sadasyaName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    'sadasyaMoNumber': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                })
            ])
        });
    };
    Object.defineProperty(BookCreateComponent.prototype, "boothDetails", {
        /////////////////////////////////
        get: function () {
            return this.bookForm.get('boothDetails');
        },
        enumerable: true,
        configurable: true
    });
    BookCreateComponent.prototype.addNewCompany = function () {
        this.boothDetails.push(this.formBuilder.group({ boothName: '', boothMoNumber: '', boothNumber: '' }));
    };
    BookCreateComponent.prototype.deleteCompany = function (index) {
        this.boothDetails.removeAt(index);
    };
    Object.defineProperty(BookCreateComponent.prototype, "sadasyaDetails", {
        /////////////////
        get: function () {
            return this.bookForm.get('sadasyaDetails');
        },
        enumerable: true,
        configurable: true
    });
    BookCreateComponent.prototype.addNewSadasya = function () {
        this.sadasyaDetails.push(this.formBuilder.group({ sadasyaName: '', sadasyaMoNumber: '' }));
    };
    BookCreateComponent.prototype.deleteSadasya = function (index) {
        this.sadasyaDetails.removeAt(index);
    };
    /////////////////
    BookCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.api.postBook(form)
            .subscribe(function (res) {
            // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            //   width: '250px',
            //   data: {name: "this.name", animal: "this.animal"}
            // });
            // dialogRef.afterClosed().subscribe(result => {
            //   console.log('The dialog was closed');
            //   this.router.navigate(['/shakha-mahiti']); 
            // });  
            alert("Congratulations, data is added successfully...!");
            _this.router.navigate(['/shakha-mahiti']);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/book-create/book-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());

// export interface DialogData {
//   animal: string;
//   name: string;
// }
// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }


/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n.shakhabtn{\n  margin-bottom: 10px;\n  margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n    <a mat-raised-button color=\"primary\" class=\"shakhabtn\" [routerLink]=\"['/add-shakha-mahiti']\">Add New Details</a>\n</div>\n\n<form [formGroup]=\"csvForm\" class=\"form\" (ngSubmit)=\"onFormSubmit(csvForm.value)\">\n  <h4> पूर्ण माहिती मिळवण्यासाठी कृपया टोकन टाका </h4>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"token\" formControlName=\"token\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!csvForm.get('token').valid && csvForm.get('token').touched\">कृपया हे भरा</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!csvForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n  </div>\n  </form>\n  <div class=\"button-row\">\n    <button id =\"export\" type=\"button\" [disabled]=\"currentState !== '2'\" (click)=\"downloadCSV()\" mat-raised-button color=\"primary\">\n      फाइल मध्ये घ्या</button>\n  </div>\n\n<!-- <div id=\"dvData\" class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\"> -->\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <!-- <ng-container matColumnDef=\"शाखा क़मांक\">\n      <th mat-header-cell *matHeaderCellDef> शाखा क़मांक </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.isbn}} </td>\n    </ng-container> -->\n\n    <!-- Title Column -->\n    <!-- <ng-container matColumnDef=\"शाखा गाव\">\n      <th mat-header-cell *matHeaderCellDef> शाखा गाव </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container> -->\n\n    <!-- Author Column -->\n    <!-- <ng-container matColumnDef=\"शाखा प्रमुख नाव\">\n      <th mat-header-cell *matHeaderCellDef> शाखा प्रमुख नाव </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n    </ng-container> -->\n\n    <!-- Title Column -->\n    <!-- <ng-container matColumnDef=\"शाखा प्रमुख मोबाईल क़मांक\">\n        <th mat-header-cell *matHeaderCellDef>शाखा प्रमुख मोबाईल क़मांक </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.isbn}} </td>\n      </ng-container> -->\n  \n      <!-- Title Column -->\n      <!-- <ng-container matColumnDef=\"companies\">\n        <th mat-header-cell *matHeaderCellDef>बूथ</th>\n        <td mat-cell *matCellDef=\"let element\"> \n            <div *ngFor=\"let booth of element.companies\">\n               <label>बूथ नाव : {{booth.boothName}}</label><br>\n               <label>बूथ मोबाईल क़मांक : {{booth.boothMoNumber}}</label><br>\n                <label>बूथ क़मांक : {{booth.boothNumber}}</label>\n            </div>          \n        </td>\n      </ng-container> -->\n  \n      <!-- Author Column -->\n      <!-- <ng-container matColumnDef=\"sadasya\">\n        <th mat-header-cell *matHeaderCellDef>सदस्य</th>\n        <td mat-cell *matCellDef=\"let element\">  \n           <div *ngFor=\"let sadasya of element.sadasya\">        \n            <label>सदस्य नाव : {{sadasya.sadasyaName}}</label><br>\n            <label>सदस्य मोबाईल क़मांक : {{sadasya.sadasyaMoNumber}}</label>\n          </div> \n        </td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/book-details/', row._id]\"></tr>\n  </table>\n</div> -->\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent, BookDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataSource", function() { return BookDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = /** @class */ (function () {
    function BookComponent(api, formBuilder) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.token = '';
        this.currentState = '1';
        this.displayedColumns = ['शाखा क़मांक', 'शाखा गाव', 'शाखा प्रमुख नाव', 'शाखा प्रमुख मोबाईल क़मांक', 'companies', 'sadasya'];
        this.dataSource = new BookDataSource(this.api);
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csvForm = this.formBuilder.group({
            'token': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.api.getBooks()
            .subscribe(function (res) {
            _this.books = res;
            _this.books.forEach(function (book) {
                console.log(book);
            });
        }, function (err) {
            console.log(err);
        });
    };
    BookComponent.prototype.onFormSubmit = function (form) {
        var token = this.csvForm.get('token').value;
        if (token == 'shakha@123') {
            this.currentState = '2';
        }
        else {
            this.currentState = '1';
        }
    };
    ////////////////////////////////////////////////////////////////////////////
    BookComponent.prototype.convertArrayOfObjectsToCSV = function (args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data, filteredKeys, boothInfo, sadasyaInfo;
        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }
        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        filteredKeys = [keys[1], keys[2], keys[3], keys[4], keys[5], keys[6], keys[7], keys[8]];
        result = '';
        result += filteredKeys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function (item, i) {
            ctr = 0;
            filteredKeys.forEach(function (key, k) {
                if (ctr > 0)
                    result += columnDelimiter;
                var parse_json = typeof item[key] === 'object';
                console.log("item[key] : " + item[key] + " at index " + i);
                console.log("item[key] : " + key + " at index => " + k);
                if (parse_json == true && key == 'boothDetails') {
                    var boothLen = item[filteredKeys[6]].length;
                    var sadasyaLen = item[filteredKeys[7]].length;
                    var l = Math.max(boothLen, sadasyaLen);
                    if (boothLen > sadasyaLen) {
                        for (i = sadasyaLen; i <= boothLen; i++) {
                            sadasyaInfo = item[filteredKeys[7]].push({ sadasyaName: "", sadasyaMoNumber: "" });
                        }
                    }
                    if (boothLen < sadasyaLen) {
                        for (i = boothLen; i <= sadasyaLen; i++) {
                            boothInfo = item[filteredKeys[6]].push({ boothName: "", boothMoNumber: "", boothNumber: "" });
                        }
                    }
                    for (i = 0; i < l; i++) {
                        console.log("wrerwetwtre =?> " + item[filteredKeys[7]]);
                        result += item[filteredKeys[6]][i].boothName != "" ? "बूथ नाव :" + item[filteredKeys[6]][i].boothName : "";
                        result += columnDelimiter;
                        result += item[filteredKeys[7]][i].sadasyaName != "" ? "सदस्य नाव :  " + item[filteredKeys[7]][i].sadasyaName : "";
                        result += "\n,,,,,,";
                        result += item[filteredKeys[6]][i].boothMoNumber != "" ? "बूथ मोबाईल क़मांक :" + item[filteredKeys[6]][i].boothMoNumber : "";
                        result += columnDelimiter;
                        result += item[filteredKeys[7]][i].sadasyaMoNumber != "" ? "सदस्य मोबाईल क़मांक : " + item[filteredKeys[7]][i].sadasyaMoNumber : "";
                        result += "\n,,,,,,";
                        result += item[filteredKeys[6]][i].boothNumber != "" ? "बूथ क़मांक :" + item[filteredKeys[6]][i].boothNumber : "";
                        result += columnDelimiter;
                        result += "\n,,,,,,";
                    }
                }
                else if (parse_json == false) {
                    if (key != "_id" || key != "shakhaKramank" || key != "sadasyaDetails" || key != "updated_date" || key != "__v") {
                        result += item[key];
                        ctr++;
                    }
                }
            });
            result += lineDelimiter;
        });
        return result;
    };
    BookComponent.prototype.downloadCSV = function () {
        var data, filename, link;
        var csv = this.convertArrayOfObjectsToCSV({
            data: this.books
        });
        if (csv == null)
            return;
        filename = 'export.csv';
        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BookComponent);
    return BookComponent;
}());

var BookDataSource = /** @class */ (function (_super) {
    __extends(BookDataSource, _super);
    function BookDataSource(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    BookDataSource.prototype.connect = function () {
        return this.api.getBooks();
    };
    BookDataSource.prototype.disconnect = function () {
    };
    return BookDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bhagyshree/MyProjects/VishalJS/mean-stack-angular6-crud-example/BranchInfo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map