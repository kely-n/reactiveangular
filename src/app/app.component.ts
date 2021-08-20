import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorEffects } from './store/effects';

import * as fromStore from './store';

import * as fromColor from './store/actions'

import { Color } from './store/models';

import { Tokens } from '../localStorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 

  color$: Observable<Color>;

  constructor(private store: Store<fromStore.GeneralState>, 
    private col_service: ColorEffects){
      this.color$ = this.store.select(fromStore.getColor);
  }

  ngOnInit(){
    
    this.store.select(fromStore.getColor).subscribe(state=> {
      console.log(state)
    })

    this.store.select(fromStore.getColorLoading).subscribe(state=> {
      if(state){console.log('color loading')}
    })

    this.store.select(fromStore.getColorLoaded).subscribe(state=> {
      if(state){console.log('color loaded')}
    })

    const tokens = Tokens.getInstance();
    const accessToken = tokens.getAccessToken();
    tokens.setAccessToken('thisIsMyAccessToken');
    console.log('token', accessToken);
  }

  blueColoring(){
    this.store.dispatch(new fromColor.ChangeColor({color: 'blue'}));
  }

  redColoring(){
    this.store.dispatch(new fromColor.ChangeColor({color: 'red'}));
  }

  deleteColoring(){
    this.store.dispatch(new fromColor.DeleteColor());
  }
}
