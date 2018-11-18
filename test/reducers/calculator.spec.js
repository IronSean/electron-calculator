import calculator from '../../app/reducers/calculator';
import {
  ADD_TO_TOTAL,
  MULTIPLY_TOTAL,
  SET_TOTAL
} from '../../app/actions/calculator';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(calculator(undefined, {})).toMatchSnapshot();
    });

    it('should handle ADD_TO_TOTAL', () => {
      expect(
        calculator(1, { type: ADD_TO_TOTAL, payload: 1 })
      ).toMatchSnapshot();
    });

    it('should handle MULTIPLY_TOTAL', () => {
      expect(
        calculator(1, { type: MULTIPLY_TOTAL, payload: 2 })
      ).toMatchSnapshot();
    });

    it('should handle SET_TOTAL', () => {
      expect(calculator(1, { type: SET_TOTAL, payload: 3 })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(calculator(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
