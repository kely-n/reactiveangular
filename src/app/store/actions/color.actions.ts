import { Action } from '@ngrx/store';
import { Color } from '../models/color.model';

export enum ColorActionTypes {
  CHANGE_COLOR = '[Color] Change Color',
  CHANGE_COLOR_SUCCESS = '[Color] Change Color Success',
  DELETE_COLOR = '[Color] delete Color',
  DELETE_COLOR_SUCCESS = '[Color] delete Color Success',
}

export class ChangeColor implements Action {
  readonly type = ColorActionTypes.CHANGE_COLOR;
  constructor(public payload: {color: string}) { }
}

export class ChangeColorSuccess implements Action {
  readonly type = ColorActionTypes.CHANGE_COLOR_SUCCESS;
}

export class DeleteColor implements Action {
  readonly type = ColorActionTypes.DELETE_COLOR;
}

export class DeleteColorSuccess implements Action {
  readonly type = ColorActionTypes.DELETE_COLOR_SUCCESS;
}

export type colorActions = ChangeColor | ChangeColorSuccess | DeleteColor | DeleteColorSuccess;

