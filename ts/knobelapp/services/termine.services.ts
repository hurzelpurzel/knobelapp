import {Injectable} from "@angular/core";
import { Http} from '@angular/http';
import { Termin } from "../model/termin.model";
@Injectable()
class TermineService{
    
    private _baseUri ="";
    
    constructor(private _http: Http){
        
    }
    
    persist(termine: Array<Termin>){
        
    }
    
}
