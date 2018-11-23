// @flow
import React, { Component } from 'react';
import CalculatorView from './CalculatorView';
import { Operations } from '../../constants/Operations';

export class Calculator extends Component<{}> {
  render() {
    return (
      <CalculatorView total={123} input={456} operation={Operations.Addition} />
    );
  }
}

export default Calculator;
