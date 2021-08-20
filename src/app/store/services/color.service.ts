import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromColor from '../actions/color.actions';
import { Color } from "../models";

type Action = fromColor.colorActions;


@Injectable()
export class colorService {
     
	timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 10000);

   getBlueColor(){
	   this.timer;
	   console.log('timed this');
	
   }

    
}