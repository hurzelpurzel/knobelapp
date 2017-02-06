System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FirebaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FirebaseService = class FirebaseService {
                constructor() {
                    var config = {
                        apiKey: "AIzaSyCqxeB7SI7rIe5mI3LY0Rpi4qnvJyqt13w",
                        authDomain: "knobelapp.firebaseapp.com",
                        databaseURL: "https://knobelapp.firebaseio.com",
                        storageBucket: "knobelapp.appspot.com",
                        messagingSenderId: "242600715534"
                    };
                    this.app = firebase.initializeApp(config);
                }
                create(coll, string, obj) {
                    var json = JSON.stringify(obj);
                    var ref = this.app.database().ref(coll + '/').push();
                    ref.set(json);
                    return ref;
                }
                update(coll, id, obj) {
                    var json = JSON.stringify(obj);
                    this.app.database().ref(coll + '/' + id).set(json);
                    return id;
                }
                pushTermine() {
                    var database = this.app.database();
                    database.push();
                }
            };
            FirebaseService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], FirebaseService);
        }
    }
});
//# sourceMappingURL=firebase.service.js.map