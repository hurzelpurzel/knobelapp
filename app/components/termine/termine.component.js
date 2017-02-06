System.register(["angular2/core", "../../model/termin.model"], function(exports_1, context_1) {
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
    var core_1, termin_model_1;
    var TermineComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (termin_model_1_1) {
                termin_model_1 = termin_model_1_1;
            }],
        execute: function() {
            TermineComponent = class TermineComponent {
                constructor() {
                    this.termine = new Array();
                    this.reset();
                }
                onSubmit() {
                    this.termine.push(this.edit);
                    this.reset();
                }
                reset() {
                    this.edit = new termin_model_1.Termin();
                }
            };
            TermineComponent = __decorate([
                core_1.Component({
                    selector: "termine-component",
                    template: `Hier stehen bald termine
    <div class="container">
       <div class="row">
          <div class="col-md-4">Termin</div><div class="col-md-4">Ort</div><div class="col-md-4">Anlass</div>
        <div>
        <div class="row" *ngFor="#item of termine" >  
            <div class="col-md-4">{{item.termin}}</div><div class="col-md-4">{{item.ort}}</div><div class="col-md-4">{{item.anlass}}</div>
        </div>
        <div class="row">  
        <form class="form-container form-horizontal" (submit)="onSubmit()">
            <div class="form-group">
            <label class="control-label col-sm-1">Termin</label><div class="col-sm-11"><input type="date" [(ngModel)]="edit.termin"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Ort</label><div class="col-sm-11"><input type="text" [(ngModel)]="edit.ort"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Anlass</label><div class="col-sm-11"><input type="text" [(ngModel)]="edit.anlass"/>
            </div></div>
            <div class="form-group">
            <button class="btn btn-primary" type="submit">Anlegen</button>
            <button class="btn btn-danger" type="button" (click)="reset()">Neu</button>
            </div>
        </form>
        </div>
    </div>
    
    
    ` }), 
                __metadata('design:paramtypes', [])
            ], TermineComponent);
            exports_1("TermineComponent", TermineComponent);
        }
    }
});
//# sourceMappingURL=termine.component.js.map