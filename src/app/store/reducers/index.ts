import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromColor from '../reducers/color.reducer';


export interface GeneralState {
  color: fromColor.ColorState ,

}

export const reducers: ActionReducerMap<GeneralState, any> = {
  color: fromColor.colorReducer,
  
};


export const metaReducers: MetaReducer<GeneralState>[] = !environment.production ? [] : [];
