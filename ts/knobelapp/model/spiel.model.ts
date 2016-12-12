import { Runde } from "./runde.model";
import { Termin } from "./termin.model";
import { KNOBLER } from "./knobler.model";
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Spiel{
    
    public termin: Termin;
    public tabelle :Map<String, Array<Runde>> ;
    public summe :Map<String, Runde> ;
    
    constructor(private _termin: Termin){
        this.termin = _termin;
        this.init();
    }
    
    init (){
        this.tabelle = new Map<String, Array<Runde>>();
        this.summe = new Map<String, Runde>();
        
        KNOBLER.forEach(knobler => {
            this.tabelle.set(knobler,new Array<Runde>());
            this.summe.set(knobler,new Runde(knobler,0));
        });
    }
    
    neueRunde(){
        
         KNOBLER.forEach(knobler => {
            var rd = this.summe.get(knobler); 
            var act = rd.zaehler+1;
            this.tabelle.get(knobler).push(new Runde(knobler,act)); 
            rd.zaehler =act;
         });
    }
    
    calcSum(){
         KNOBLER.forEach(knobler => {
            var sumRunde = this.summe.get(knobler); 
            sumRunde.reset();
            this.tabelle.get(knobler).forEach(runde =>{
                sumRunde.add(runde);
            });
         });
    }
}
