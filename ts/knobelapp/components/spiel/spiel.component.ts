/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
 */
import { Component } from "angular2/core";
import { RundeComponent } from "./runde.component";
import { RundeKopfComponent } from "./rundekopf.component";
import { Runde } from "../../model/runde.model";

@Component({
    selector: "spiel-component",
    directives: [RundeComponent, RundeKopfComponent],
    template: `
        <rundekopf-component [rundenzaehler]="aktuelleRunde.zaehler"></rundekopf-component>
        <runde-component [runde]="aktuelleRunde" ></runde-component>
    `})
    
export class SpielComponent{
    
    aktuelleRunde: Runde;
    constructor(){
        this.aktuelleRunde=new Runde("Potti",1);
    }
     
    
}

