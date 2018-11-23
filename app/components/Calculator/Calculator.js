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

  //TODO better typing of input
  handleButton = (input: string) => {
    switch (input) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        this.setState(prevState => {
          return {
            input: prevState.input * 10 + parseInt(input)
          };
        });
        break;
      case '+':
      case '-':
      case '/':
      case '*':
      case '=':
      default:
        break;
    }
  };

  render() {
    const { total, input, operation } = this.state;
    return (
      <CalculatorView
        total={total}
        input={input}
        operation={operation}
        handleButton={this.handleButton}
      />
    );
  }
}

export default Calculator;
