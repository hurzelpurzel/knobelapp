System.register(["angular2/core", "./runde.component", "./rundekopf.component", "../../model/runde.model"], function(exports_1, context_1) {
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
    var core_1, runde_component_1, rundekopf_component_1, runde_model_1;
    var SpielComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (runde_component_1_1) {
                runde_component_1 = runde_component_1_1;
            },
            function (rundekopf_component_1_1) {
                rundekopf_component_1 = rundekopf_component_1_1;
            },
            function (runde_model_1_1) {
                runde_model_1 = runde_model_1_1;
            }],
        execute: function() {
            SpielComponent = class SpielComponent {
                constructor() {
                    this.aktuelleRunde = new runde_model_1.Runde("Potti", 1);
                }
            };
            SpielComponent = __decorate([
                core_1.Component({
                    selector: "spiel-component",
                    directives: [runde_component_1.RundeComponent, rundekopf_component_1.RundeKopfComponent],
                    template: `
        <rundekopf-component [rundenzaehler]="aktuelleRunde.zaehler"></rundekopf-component>
        <runde-component [runde]="aktuelleRunde" ></runde-component>
    ` }), 
                __metadata('design:paramtypes', [])
            ], SpielComponent);
            exports_1("SpielComponent", SpielComponent);
        }
    }
});
//# sourceMappingURL=spiel.component.js.map