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
  handleButton = (button: string) => {
    switch (button) {
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
            input: prevState.input * 10 + parseInt(button)
          };
        });
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        this.setState(prevState => {
          const total = prevState.input;
          const input = 0;
          const operation = button;

          return {
            total,
            input,
            operation
          };
        });
        break;
      case '=':
        if (this.state.operation === Operations.None) {
          break;
        }

        const result = this.handleCalculation();

        this.setState(prevState => {
          return { total: result, input: 0, operation: Operations.None };
        });
      default:
        break;
    }
  };

  handleCalculation = () => {
    const { input, total, operation } = this.state;

    switch (operation) {
      case Operations.Addition:
        return total + input;
      case Operations.Subtraction:
        return total - input;
      case Operations.Multiplication:
        return total * input;
      case Operations.Division:
        return input !== 0 ? total / input : 0;
      case Operations.None:
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
