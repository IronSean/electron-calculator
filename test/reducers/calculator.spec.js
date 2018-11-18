import calculator from '../../app/reducers/calculator';
import {
  ADD_TO_TOTAL,
  MULTIPLY_TOTAL,
  CLEAR_TOTAL
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

    it('should handle CLEAR_TOTAL', () => {
      expect(calculator(1, { type: CLEAR_TOTAL })).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(calculator(1, { type: 'unknown' })).toMatchSnapshot();
    });
  });
});
