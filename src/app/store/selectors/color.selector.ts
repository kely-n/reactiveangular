import { createSelector } from "@ngrx/store";
import { GeneralState } from "../reducers";
import * as fromColor from '../reducers/color.reducer'

export const getColorState = createSelector((state: GeneralState)=>state.color, value => value);

export const getColor= createSelector(getColorState, fromColor.getColor);
export const getColorLoading= createSelector(getColorState, fromColor.getColorLoading);
export const getColorLoaded= createSelector(getColorState, fromColor.getColorLoaded);
export const getColorDeleted= createSelector(getColorState, fromColor.getColorDeleted);
export const getColorDeleting= createSelector(getColorState, fromColor.getColorDeleting);

