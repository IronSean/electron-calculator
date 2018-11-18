// @flow
import {
  ADD_TO_TOTAL,
  MULTIPLY_TOTAL,
  CLEAR_TOTAL
} from '../actions/calculator';
import type { Action } from './types';

export default function calculator(state: number = 0, action: Action) {
  switch (action.type) {
    case ADD_TO_TOTAL:
      return state + action.payload;
    case MULTIPLY_TOTAL:
      return state * action.payload;
    case CLEAR_TOTAL:
      return 0;
    default:
      return state;
  }
}
