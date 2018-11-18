// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
export const MULTIPLY_TOTAL = 'MULTIPLY_TOTAL';
export const SET_TOTAL = 'SET_TOTAL';

export function addToTotal(value: number) {
  return {
    type: ADD_TO_TOTAL,
    payload: value
  };
}

export function multiplyTotal(value: number) {
  return {
    type: MULTIPLY_TOTAL,
    payload: value
  };
}

export function subtractFomTotal(value: number) {
  return (dispatch: Dispatch) => {
    dispatch(addToTotal(-value));
  };
}

export function divideTotal(value: number) {
  return (dispatch: Dispatch) => {
    if (value === 0) {
      return;
    }

    dispatch(multiplyTotal(1 / value));
  };
}

export function setTotal(value: number) {
  return { type: SET_TOTAL, payload: value };
}

export function clearTotal() {
  return (dispatch: Dispatch) => {
    dispatch(setTotal(0));
  };
}
