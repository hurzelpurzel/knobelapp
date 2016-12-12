System.register(["./runde.model", "./knobler.model"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var runde_model_1, knobler_model_1;
    var Spiel;
    return {
        setters:[
            function (runde_model_1_1) {
                runde_model_1 = runde_model_1_1;
            },
            function (knobler_model_1_1) {
                knobler_model_1 = knobler_model_1_1;
            }],
        execute: function() {
            /*
             * To change this license header, choose License Headers in Project Properties.
             * To change this template file, choose Tools | Templates
             * and open the template in the editor.
             */
            Spiel = class Spiel {
                constructor(_termin) {
                    this._termin = _termin;
                    this.termin = _termin;
                    this.init();
                }
                init() {
                    this.tabelle = new Map();
                    this.summe = new Map();
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        this.tabelle.set(knobler, new Array());
                        this.summe.set(knobler, new runde_model_1.Runde(0));
                    });
                }
                neueRunde() {
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        var rd = this.summe.get(knobler);
                        var act = rd.zaehler + 1;
                        this.tabelle.get(knobler).push(new runde_model_1.Runde(act));
                        rd.zaehler = act;
                    });
                }
                calcSum() {
                    knobler_model_1.KNOBLER.forEach(knobler => {
                        var sumRunde = this.summe.get(knobler);
                        sumRunde.reset();
                        this.tabelle.get(knobler).forEach(runde => {
                            sumRunde.add(runde);
                        });
                    });
                }
            };
            exports_1("Spiel", Spiel);
        }
    }
});
//# sourceMappingURL=spiel.model.js.map