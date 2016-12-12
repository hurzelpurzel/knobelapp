import { Component, Input} from "angular2/core";

@Component({
    selector: "rundekopf-component",
    styles:['.headline{ font-weight: bolder; margin: 1em; allign: center;color: blue}'],
    template: `  
        <button class="btn-primary">Runde: {{rundenzaehler}} </button>
        
        <div class="row headline">
            <div class="col-md-2">Knobler</div>
            <div class="col-md-2">Runden</div>
            <div class="col-md-2">Hälften</div>
            <div class="col-md-2">Outs</div>
            <div class="col-md-2">Dreiharte</div>
            <div class="col-md-2">Strafen</div>
        </div >
      
     `})
   
export class RundeKopfComponent{
    @Input()
    rundenzaehler: number;
}

