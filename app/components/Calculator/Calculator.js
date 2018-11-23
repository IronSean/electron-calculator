// @flow
import React, { Component } from 'react';
import CalculatorView from './CalculatorView';
import { Operations } from '../../constants/Calculator';
import type { Operation } from '../../constants/Calculator';

type State = {
  total: number,
  input: number,
  operation: Operation
};

export class Calculator extends Component<{}, State> {
  state = { total: 1234, input: 567, operation: Operations.None };

  handleButton = () => {};

  render() {
    const { total, input, operation } = this.state;
    return <CalculatorView total={total} input={input} operation={operation} />;
  }
}

export default Calculator;
