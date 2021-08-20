import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { Actions, createEffect, ofType }  from '@ngrx/effects';
import * as fromColor from '../actions/color.actions';
import { GeneralState } from "../reducers";
import { Color } from "../models";
import { map, switchMap } from 'rxjs/operators'
type Action = fromColor.colorActions;


@Injectable()
export class ColorEffects {
     
    //effects
    loadColor$ = createEffect(()=>this.actions$.pipe(
        ofType(fromColor.ColorActionTypes.CHANGE_COLOR),
        // this.setBlueColor(),
        map(()=>({type: fromColor.ColorActionTypes.CHANGE_COLOR_SUCCESS})
        ),        
    ))

    deleteColor$ = createEffect(()=>this.actions$.pipe(
        ofType(fromColor.ColorActionTypes.DELETE_COLOR),
        // this.setBlueColor(),
        map(()=>({type: fromColor.ColorActionTypes.DELETE_COLOR_SUCCESS})
        ),        
    ))

    constructor(
        private actions$: Actions,  
        private store: Store<GeneralState>,
    ){ 

    }

    // setBlueColor(){
    //     //set some second timeout
    //     setTimeout(() => {
    //         return 'blue'
    //     }, 6000);     
    // }

    // setRedColor(){
    //     //set some second timeout
    //     setTimeout(() => {

    //     }, 2000);     
    // }



}