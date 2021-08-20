import * as fromColor from '../actions/color.actions';
import { Color } from '../models/color.model';

// export type Action = fromColor.colorActions;

export interface ColorState {
    color: Color,
    loaded: boolean,
    loading: boolean,
    deleting: boolean,
    deleted: boolean,
    tempColor?: string
}

const defaultColor = new Color('yellow');

export const initialState : ColorState = {
    color : defaultColor,
    loaded: false,
    loading: false,
    deleting: false,
    deleted: false,
}

export function colorReducer(state : ColorState = initialState, action: fromColor.colorActions): ColorState
{
    // console.log(action.type)
    // console.log(state)
    switch (action.type)
    {
        case fromColor.ColorActionTypes.CHANGE_COLOR:
            return {...state, tempColor : action.payload.color, deleting: false, loading: true, deleted: false, loaded : false};

        case fromColor.ColorActionTypes.CHANGE_COLOR_SUCCESS:
            return {...state, deleting: false, 
                color: state.tempColor && state.tempColor !== '' ? new Color(state.tempColor) : state.color, //setting color
                tempColor: '', loading: false, loaded: true};

        case fromColor.ColorActionTypes.DELETE_COLOR_SUCCESS:
            return{...state, deleting: false, color: defaultColor, loaded: false, deleted: true};

        case fromColor.ColorActionTypes.DELETE_COLOR:
            return{...state, loaded: false, deleted: false, deleting: true}
        default:
            return state;
    }

}

export const getColorLoading = (state: ColorState) =>state.loading;
export const getColorLoaded = (state: ColorState) =>state.loaded;
export const getColorDeleted = (state: ColorState) =>state.deleted;
export const getColorDeleting = (state: ColorState) =>state.deleting;
export const getColor = (state: ColorState) =>state.color;