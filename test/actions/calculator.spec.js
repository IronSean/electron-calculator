import { spy } from 'sinon';
import * as actions from '../../app/actions/calculator';

describe('actions', () => {
  it('should addToTotal should create ADD_TO_TOTAL action with value as payload', () => {
    expect(actions.addToTotal(12)).toMatchSnapshot();
  });

  it('should multiplyTotal should create MULTIPLY_TOTAL action with value as payload', () => {
    expect(actions.multiplyTotal(12)).toMatchSnapshot();
  });

  it('should subtractTotal should create ADD_TO_TOTAL action with negative value as payload', () => {
    const value = 12;
    const fn = actions.subtractFomTotal(value);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    fn(dispatch);
    expect(
      dispatch.calledWith({ type: actions.ADD_TO_TOTAL, payload: -value })
    ).toBe(true);
  });

  it('should divideTotal should create MULTIPLY_TOTAL action with inverse value as payload', () => {
    const value = 12;
    const fn = actions.divideTotal(value);
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    fn(dispatch);
    expect(
      dispatch.calledWith({ type: actions.MULTIPLY_TOTAL, payload: 1 / value })
    ).toBe(true);
  });

  it('should divideTotal shouldnt create MULTIPLY_TOTAL action if value is zero', () => {
    const fn = actions.divideTotal(0);
    const dispatch = spy();
    fn(dispatch);
    expect(dispatch.called).toBe(false);
  });

  // There's no nice way to test this at the moment...
  it('should clearTotal should create CLEAR_TOTAL action', () => {
    expect(actions.clearTotal()).toMatchSnapshot();
  });
});
