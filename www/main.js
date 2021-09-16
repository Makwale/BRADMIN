(self["webpackChunkBRADMIN"] = self["webpackChunkBRADMIN"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_addbus_addbus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addbus/addbus.component */ 5696);
/* harmony import */ var _components_adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/adddriver/adddriver.component */ 2400);
/* harmony import */ var _components_addslot_addslot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/addslot/addslot.component */ 5575);
/* harmony import */ var _components_addstudent_addstudent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/addstudent/addstudent.component */ 4484);
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/booking/booking.component */ 8587);
/* harmony import */ var _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bus/bus.component */ 8214);
/* harmony import */ var _components_home_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.page */ 1673);
/* harmony import */ var _components_driver_driver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/driver/driver.component */ 2762);
/* harmony import */ var _components_slot_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/slot/slot.component */ 6753);
/* harmony import */ var _components_student_student_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/student/student.component */ 4883);













const routes = [
    {
        path: '',
        component: _components_home_home_page__WEBPACK_IMPORTED_MODULE_6__.HomePage,
        children: [
            {
                path: '',
                component: _components_driver_driver_component__WEBPACK_IMPORTED_MODULE_7__.DriverComponent
            },
            {
                path: 'adddriver',
                component: _components_adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_1__.AdddriverComponent
            },
            {
                path: 'bus',
                component: _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__.BusComponent
            },
            {
                path: 'addbus',
                component: _components_addbus_addbus_component__WEBPACK_IMPORTED_MODULE_0__.AddbusComponent
            },
            {
                path: 'slot',
                component: _components_slot_slot_component__WEBPACK_IMPORTED_MODULE_8__.SlotComponent
            },
            {
                path: 'addslot',
                component: _components_addslot_addslot_component__WEBPACK_IMPORTED_MODULE_2__.AddslotComponent
            },
            {
                path: 'student',
                component: _components_student_student_component__WEBPACK_IMPORTED_MODULE_9__.StudentComponent
            },
            {
                path: 'addstudent',
                component: _components_addstudent_addstudent_component__WEBPACK_IMPORTED_MODULE_3__.AddstudentComponent
            },
            {
                path: 'booking',
                component: _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_4__.BookingComponent
            },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_12__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/storage */ 8274);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _components_home_home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.page */ 1673);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ 7331);
/* harmony import */ var _components_driver_driver_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/driver/driver.component */ 2762);
/* harmony import */ var _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bus/bus.component */ 8214);
/* harmony import */ var _components_adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adddriver/adddriver.component */ 2400);
/* harmony import */ var _components_addbus_addbus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addbus/addbus.component */ 5696);
/* harmony import */ var _components_slot_slot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/slot/slot.component */ 6753);
/* harmony import */ var _components_addslot_addslot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/addslot/addslot.component */ 5575);
/* harmony import */ var _components_student_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/student/student.component */ 4883);
/* harmony import */ var _components_addstudent_addstudent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/addstudent/addstudent.component */ 4484);
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/booking/booking.component */ 8587);
































const firebaseConfig = {
    apiKey: "AIzaSyCvsvYeDkWYPNVJdVtdFvt7PpQirycbaxI",
    authDomain: "bus-project-52efc.firebaseapp.com",
    projectId: "bus-project-52efc",
    storageBucket: "bus-project-52efc.appspot.com",
    messagingSenderId: "789865770058",
    appId: "1:789865770058:web:7fa8ee99ecfaa262ad4ab3",
    measurementId: "G-Z3FSFN8C7X"
};
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_home_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage,
            _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarComponent,
            _components_driver_driver_component__WEBPACK_IMPORTED_MODULE_4__.DriverComponent,
            _components_bus_bus_component__WEBPACK_IMPORTED_MODULE_5__.BusComponent,
            _components_adddriver_adddriver_component__WEBPACK_IMPORTED_MODULE_6__.AdddriverComponent,
            _components_addbus_addbus_component__WEBPACK_IMPORTED_MODULE_7__.AddbusComponent,
            _components_slot_slot_component__WEBPACK_IMPORTED_MODULE_8__.SlotComponent,
            _components_addslot_addslot_component__WEBPACK_IMPORTED_MODULE_9__.AddslotComponent,
            _components_student_student_component__WEBPACK_IMPORTED_MODULE_10__.StudentComponent,
            _components_addstudent_addstudent_component__WEBPACK_IMPORTED_MODULE_11__.AddstudentComponent,
            _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_12__.BookingComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_25__.AngularFireModule.initializeApp(firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_26__.AngularFireAuthModule,
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__.AngularFireDatabaseModule,
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_28__.AngularFireStorageModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5696:
/*!*******************************************************!*\
  !*** ./src/app/components/addbus/addbus.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddbusComponent": () => (/* binding */ AddbusComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addbus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addbus.component.html */ 966);
/* harmony import */ var _addbus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addbus.component.scss */ 8511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddbusComponent = class AddbusComponent {
    constructor() { }
    ngOnInit() { }
};
AddbusComponent.ctorParameters = () => [];
AddbusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addbus',
        template: _raw_loader_addbus_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addbus_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddbusComponent);



/***/ }),

/***/ 2400:
/*!*************************************************************!*\
  !*** ./src/app/components/adddriver/adddriver.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdddriverComponent": () => (/* binding */ AdddriverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_adddriver_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adddriver.component.html */ 5394);
/* harmony import */ var _adddriver_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adddriver.component.scss */ 8674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AdddriverComponent = class AdddriverComponent {
    constructor() { }
    ngOnInit() { }
};
AdddriverComponent.ctorParameters = () => [];
AdddriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-adddriver',
        template: _raw_loader_adddriver_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adddriver_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdddriverComponent);



/***/ }),

/***/ 5575:
/*!*********************************************************!*\
  !*** ./src/app/components/addslot/addslot.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddslotComponent": () => (/* binding */ AddslotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addslot_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addslot.component.html */ 7610);
/* harmony import */ var _addslot_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addslot.component.scss */ 4390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddslotComponent = class AddslotComponent {
    constructor() { }
    ngOnInit() { }
};
AddslotComponent.ctorParameters = () => [];
AddslotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addslot',
        template: _raw_loader_addslot_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addslot_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddslotComponent);



/***/ }),

/***/ 4484:
/*!***************************************************************!*\
  !*** ./src/app/components/addstudent/addstudent.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddstudentComponent": () => (/* binding */ AddstudentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addstudent_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addstudent.component.html */ 442);
/* harmony import */ var _addstudent_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addstudent.component.scss */ 5577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddstudentComponent = class AddstudentComponent {
    constructor() { }
    ngOnInit() { }
};
AddstudentComponent.ctorParameters = () => [];
AddstudentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addstudent',
        template: _raw_loader_addstudent_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addstudent_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddstudentComponent);



/***/ }),

/***/ 8587:
/*!*********************************************************!*\
  !*** ./src/app/components/booking/booking.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponent": () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_booking_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./booking.component.html */ 9731);
/* harmony import */ var _booking_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.component.scss */ 2580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_medels_booking_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/medels/booking.model */ 962);
/* harmony import */ var src_app_medels_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/medels/student.model */ 5914);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ 4382);











let BookingComponent = class BookingComponent {
    constructor(dbs, afs) {
        this.dbs = dbs;
        this.afs = afs;
        this.displayedColumns = ['id', 'firstname', 'lastname', 'studentNumber', 'email', 'status', 'action'];
        this.bookings = [];
    }
    ngOnInit() {
        console.log(this.dbs.bookings);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dbs.bookings);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getBookings();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getBookings() {
        this.afs.collection("Booking").snapshotChanges().subscribe(data => {
            for (let dr of data) {
                let id = dr.payload.doc.id;
                let bookingdata = dr.payload.doc.data();
                this.afs.collection("Student").doc(bookingdata["studentid"]).snapshotChanges().subscribe(data => {
                    let stid = data.payload.id;
                    let studentdata = data.payload.data();
                    let student = new src_app_medels_student_model__WEBPACK_IMPORTED_MODULE_3__.Student(stid, studentdata["firstname"], studentdata["lastname"], studentdata["studentNumber"], studentdata["email"]);
                    let booking = new src_app_medels_booking_model__WEBPACK_IMPORTED_MODULE_2__.Booking(id, bookingdata["slotid"], student, bookingdata["cancelled"]);
                    if (!this.seachBooking(booking)) {
                        this.dbs.bookings.push(booking);
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.dbs.bookings);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    }
                });
            }
        });
    }
    seachBooking(booking) {
        for (let dr of this.dbs.bookings) {
            if (dr.id == booking.id) {
                return true;
            }
        }
        return false;
    }
};
BookingComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore }
];
BookingComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort,] }]
};
BookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-booking',
        template: _raw_loader_booking_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_booking_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingComponent);



/***/ }),

/***/ 8214:
/*!*************************************************!*\
  !*** ./src/app/components/bus/bus.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusComponent": () => (/* binding */ BusComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_bus_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bus.component.html */ 4270);
/* harmony import */ var _bus_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bus.component.scss */ 1561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let BusComponent = class BusComponent {
    constructor() { }
    ngOnInit() { }
};
BusComponent.ctorParameters = () => [];
BusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-bus',
        template: _raw_loader_bus_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bus_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BusComponent);



/***/ }),

/***/ 2762:
/*!*******************************************************!*\
  !*** ./src/app/components/driver/driver.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverComponent": () => (/* binding */ DriverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_driver_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./driver.component.html */ 2512);
/* harmony import */ var _driver_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driver.component.scss */ 118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_medels_driver_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/medels/driver.model */ 6807);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);










let DriverComponent = class DriverComponent {
    constructor(dbs, afs) {
        this.dbs = dbs;
        this.afs = afs;
        this.displayedColumns = ['id', 'firstname', 'lastname', 'phone', 'email', 'action'];
        this.drivers = [];
    }
    ngOnInit() {
        this.getDrivers();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getDrivers() {
        this.afs.collection("Driver").snapshotChanges().subscribe(data => {
            for (let dr of data) {
                let id = dr.payload.doc.id;
                let driverdata = dr.payload.doc.data();
                let driver = new src_app_medels_driver_model__WEBPACK_IMPORTED_MODULE_3__.Driver(id, driverdata["firstname"], driverdata["lastname"], driverdata["phone"], driverdata["email"]);
                if (!this.searchDriver(driver)) {
                    this.dbs.drivers.push(driver);
                }
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.dbs.drivers);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    searchDriver(driver) {
        for (let dr of this.dbs.drivers) {
            if (dr.id == driver.id) {
                return true;
            }
        }
        return false;
    }
};
DriverComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
DriverComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort,] }]
};
DriverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-driver',
        template: _raw_loader_driver_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_driver_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DriverComponent);



/***/ }),

/***/ 1673:
/*!**********************************************!*\
  !*** ./src/app/components/home/home.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 6077);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ 4382);





let HomePage = class HomePage {
    constructor(dbs) {
        this.dbs = dbs;
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 6753:
/*!***************************************************!*\
  !*** ./src/app/components/slot/slot.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotComponent": () => (/* binding */ SlotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_slot_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./slot.component.html */ 8333);
/* harmony import */ var _slot_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot.component.scss */ 5138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_medels_slot_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/medels/slot.model */ 7512);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);










let SlotComponent = class SlotComponent {
    constructor(dbs, afs) {
        this.dbs = dbs;
        this.afs = afs;
        this.displayedColumns = ['id', 'from', 'to', 'avail', 'booked', 'date', 'action'];
        this.slots = [];
    }
    ngOnInit() {
        this.getslots();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getslots() {
        this.afs.collection("Slot").snapshotChanges().subscribe(data => {
            for (let dr of data) {
                let id = dr.payload.doc.id;
                let slotdata = dr.payload.doc.data();
                let slot = new src_app_medels_slot_model__WEBPACK_IMPORTED_MODULE_2__.Slot(id, slotdata["from"], slotdata["to"], slotdata["date"], slotdata["busid"], slotdata["avail"], slotdata["booked"]);
                if (!this.searchslot(slot)) {
                    this.dbs.slots.push(slot);
                }
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.dbs.slots);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    searchslot(slot) {
        for (let dr of this.dbs.slots) {
            if (dr.id == slot.id) {
                return true;
            }
        }
        return false;
    }
};
SlotComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
SlotComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort,] }]
};
SlotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-slot',
        template: _raw_loader_slot_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_slot_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SlotComponent);



/***/ }),

/***/ 4883:
/*!*********************************************************!*\
  !*** ./src/app/components/student/student.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentComponent": () => (/* binding */ StudentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_student_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student.component.html */ 3659);
/* harmony import */ var _student_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.component.scss */ 3201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_medels_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/medels/student.model */ 5914);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ 4382);










let StudentComponent = class StudentComponent {
    constructor(dbs, afs) {
        this.dbs = dbs;
        this.afs = afs;
        this.displayedColumns = ['id', 'firstname', 'lastname', 'studentNumber', 'email', 'action'];
        this.students = [];
    }
    ngOnInit() {
        this.getDrivers();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    getDrivers() {
        this.afs.collection("Student").snapshotChanges().subscribe(data => {
            for (let dr of data) {
                let id = dr.payload.doc.id;
                let driverdata = dr.payload.doc.data();
                let student = new src_app_medels_student_model__WEBPACK_IMPORTED_MODULE_2__.Student(id, driverdata["firstname"], driverdata["lastname"], driverdata["studentNumber"], driverdata["email"]);
                if (!this.searchDriver(student)) {
                    this.dbs.students.push(student);
                }
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource(this.dbs.students);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    searchDriver(student) {
        for (let dr of this.dbs.students) {
            if (dr.id == student.id) {
                return true;
            }
        }
        return false;
    }
};
StudentComponent.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
StudentComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator,] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort,] }]
};
StudentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-student',
        template: _raw_loader_student_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentComponent);



/***/ }),

/***/ 7331:
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./toolbar.component.html */ 1504);
/* harmony import */ var _toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.component.scss */ 3790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ToolbarComponent = class ToolbarComponent {
    constructor() { }
    ngOnInit() { }
};
ToolbarComponent.ctorParameters = () => [];
ToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-toolbar',
        template: _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ToolbarComponent);



/***/ }),

/***/ 962:
/*!*****************************************!*\
  !*** ./src/app/medels/booking.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Booking": () => (/* binding */ Booking)
/* harmony export */ });
class Booking {
    constructor(id, slotid, student, status) {
        this.id = id;
        this.slotid = slotid;
        this.student = student;
        this.status = status ? "Cancelled" : "";
    }
}


/***/ }),

/***/ 6807:
/*!****************************************!*\
  !*** ./src/app/medels/driver.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Driver": () => (/* binding */ Driver)
/* harmony export */ });
class Driver {
    constructor(id, firstname, lastname, phone, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}


/***/ }),

/***/ 7512:
/*!**************************************!*\
  !*** ./src/app/medels/slot.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Slot": () => (/* binding */ Slot)
/* harmony export */ });
class Slot {
    constructor(id, from, to, date, busid, avail, booked) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.date = date.toDate();
        this.busid = busid;
        this.avail = avail;
        this.booked = booked;
    }
}


/***/ }),

/***/ 5914:
/*!*****************************************!*\
  !*** ./src/app/medels/student.model.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Student": () => (/* binding */ Student)
/* harmony export */ });
class Student {
    constructor(id, firstname, lastname, studentNumber, email) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentNumber = studentNumber;
        this.email = email;
    }
}


/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6717);



let DatabaseService = class DatabaseService {
    constructor(afs) {
        this.afs = afs;
        this.drivers = [];
        this.students = [];
        this.slots = [];
        this.bookings = [];
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 8511:
/*!*********************************************************!*\
  !*** ./src/app/components/addbus/addbus.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRidXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 8674:
/*!***************************************************************!*\
  !*** ./src/app/components/adddriver/adddriver.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRkcml2ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4390:
/*!***********************************************************!*\
  !*** ./src/app/components/addslot/addslot.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRzbG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 5577:
/*!*****************************************************************!*\
  !*** ./src/app/components/addstudent/addstudent.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRzdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 2580:
/*!***********************************************************!*\
  !*** ./src/app/components/booking/booking.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 1561:
/*!***************************************************!*\
  !*** ./src/app/components/bus/bus.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 118:
/*!*********************************************************!*\
  !*** ./src/app/components/driver/driver.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7779:
/*!************************************************!*\
  !*** ./src/app/components/home/home.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.acc {\n  width: 100%;\n  background-color: #0a4694;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hY2N7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE0Njk0O1xuICBjb2xvcjogI2ZmZlxufSJdfQ== */");

/***/ }),

/***/ 5138:
/*!*****************************************************!*\
  !*** ./src/app/components/slot/slot.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 3201:
/*!***********************************************************!*\
  !*** ./src/app/components/student/student.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 3790:
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".example-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvXHJcbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ 966:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addbus/addbus.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  addbus works!\n</p>\n");

/***/ }),

/***/ 5394:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/adddriver/adddriver.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  adddriver works!\n</p>\n");

/***/ }),

/***/ 7610:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addslot/addslot.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  addslot works!\n</p>\n");

/***/ }),

/***/ 442:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/addstudent/addstudent.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  addstudent works!\n</p>\n");

/***/ }),

/***/ 9731:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/booking/booking.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field style=\"width: 90%; margin: auto; margin-top: 10px; margin-left: 10px;\">\n  <mat-label>Seach Booking</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search booking by id\" #input>\n</mat-form-field>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"width: 100%;\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Booking ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"firstname\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.student.firstname}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"lastname\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.student.lastname}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"studentNumber\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Student Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.student.studentNumber}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.student.email}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: #0a4694;\">edit</mat-icon>\n          </button> \n\n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: red;\" color=\"danger\">delete</mat-icon>\n          </button> \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10]\"></mat-paginator>");

/***/ }),

/***/ 4270:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bus/bus.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  bus works!\n</p>\n");

/***/ }),

/***/ 2512:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/driver/driver.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field style=\"width: 90%; margin: auto; margin-top: 10px; margin-left: 10px;\">\r\n    <mat-label>Seach Driver</mat-label>\r\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search driver by id or first name, last name, phone number, email \" #input>\r\n</mat-form-field>\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"width: 100%;\">\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Progress Column -->\r\n      <ng-container matColumnDef=\"firstname\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.firstname}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"lastname\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.lastname}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Fruit Column -->\r\n      <ng-container matColumnDef=\"phone\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element\"> \r\n            <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\r\n                <mat-icon style=\"color: #0a4694;\">edit</mat-icon>\r\n            </button> \r\n\r\n            <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\r\n                <mat-icon style=\"color: red;\" color=\"danger\">delete</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container>\r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  \r\n      <!-- Row shown when there is no matching data. -->\r\n      <tr class=\"mat-row\" *matNoDataRow>\r\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\r\n      </tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[10]\"></mat-paginator>");

/***/ }),

/***/ 6077:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<mat-sidenav-container class=\"example-container\" >\n  <mat-sidenav fixedInViewport fixedTopGap=\"80\" mode=\"side\" class=\"acc\" opened style=\"width: 300px;\" >\n\n      <mat-accordion color=\"primary\" >\n        <mat-expansion-panel class=\"acc\" expanded>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <ion-icon size=\"large\" color=\"light\" name=\"people\"></ion-icon>\n            \n            </mat-panel-title>\n\n            <mat-panel-description>\n              <ion-label color=\"light\">Drivers</ion-label>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <ion-item button routerLink=\"\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"people\"></ion-icon><ion-label>View Drivers</ion-label>\n          </ion-item>\n\n          <ion-item button routerLink=\"adddriver\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"person-add\"></ion-icon>\n            <ion-label>Add Driver</ion-label>\n          </ion-item>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel class=\"acc\" >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <ion-icon slot=\"start\" color=\"light\" size=\"large\" name=\"car\"></ion-icon>\n            </mat-panel-title>\n            <mat-panel-description>\n              <ion-label color=\"light\">Buses</ion-label>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <ion-item button routerLink=\"bus\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"car\"></ion-icon><ion-label>View Buses</ion-label>\n          </ion-item>\n\n          <ion-item button routerLink=\"addbus\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            <ion-label>Add Bus</ion-label>\n          </ion-item>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel class=\"acc\" >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <ion-icon slot=\"start\" size=\"large\" color=\"light\" name=\"card\"></ion-icon>\n            </mat-panel-title>\n\n            <mat-panel-description>\n              <ion-label color=\"light\">Slots</ion-label>\n            </mat-panel-description>\n            \n          </mat-expansion-panel-header>\n          \n          <ion-item button routerLink=\"slot\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"card\"></ion-icon><ion-label>View Slots</ion-label>\n          </ion-item>\n\n          <ion-item button routerLink=\"addslot\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n            <ion-label>Add Slot</ion-label>\n          </ion-item>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel class=\"acc\" >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <ion-icon slot=\"start\" size=\"large\" color=\"light\" name=\"people\"></ion-icon>\n            </mat-panel-title>\n\n            <mat-panel-description>\n              <ion-label color=\"light\">Students</ion-label>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <ion-item button routerLink=\"student\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"people\"></ion-icon><ion-label>View Students</ion-label>\n          </ion-item>\n\n          <ion-item button routerLink=\"addstudent\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"person-add\"></ion-icon>\n            <ion-label>Add Stuent</ion-label>\n          </ion-item>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel class=\"acc\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              <ion-icon slot=\"start\" name=\"list\" size=\"large\" color=\"light\"></ion-icon>\n            </mat-panel-title>\n\n            <mat-panel-description>\n              <ion-label color=\"light\">Bookings</ion-label>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          \n          <ion-item button routerLink=\"booking\" color=\"ourtheme\" detail>\n            <ion-icon slot=\"start\" name=\"list\"></ion-icon><ion-label>View Bookings</ion-label>\n          </ion-item>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n \n\n\n  </mat-sidenav>\n  <mat-sidenav-content style=\"margin-left: 300px;\">\n\n    <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>");

/***/ }),

/***/ 8333:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slot/slot.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field style=\"width: 90%; margin: auto; margin-top: 10px; margin-left: 10px;\">\n  <mat-label>Seach Driver</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search driver by id or first name, last name, phone number, booked \" #input>\n</mat-form-field>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"width: 100%;\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"from\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> From </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.from}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"to\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> To </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.to}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"avail\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Available Seats </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.avail}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"booked\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Booked Seats</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.booked}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date & Time</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date | date:'medium'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: #0a4694;\">edit</mat-icon>\n          </button> \n\n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: red;\" color=\"danger\">delete</mat-icon>\n          </button> \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10]\"></mat-paginator>");

/***/ }),

/***/ 3659:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/student/student.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-form-field style=\"width: 90%; margin: auto; margin-top: 10px; margin-left: 10px;\">\n  <mat-label>Seach student</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Search student by id or first name, last name, student number, email \" #input>\n</mat-form-field>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\" style=\"width: 100%;\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"firstname\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.firstname}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"lastname\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.lastname}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"studentNumber\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Student Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.studentNumber}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n      <td mat-cell *matCellDef=\"let element\"> \n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: #0a4694;\">edit</mat-icon>\n          </button> \n\n          <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n              <mat-icon style=\"color: red;\" color=\"danger\">delete</mat-icon>\n          </button> \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10]\"></mat-paginator>");

/***/ }),

/***/ 1504:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar  style=\"height: 80px; background-color: #0a4694;\">\n\n  <span style=\"color: #fff;\">BR ADMIN</span>\n  <span class=\"example-spacer\"></span>\n  <button  mat-raised-button  style=\"color: #0a4694;\" >\n    Logout\n  </button>\n  \n</mat-toolbar>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map