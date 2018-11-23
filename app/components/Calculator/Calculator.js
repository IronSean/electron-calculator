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

const initialState: State = {
  total: 0,
  input: 0,
  operation: Operations.None
};

export class Calculator extends Component<{}, State> {
  state = initialState;

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
        this.handleNumber(button);
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        this.handleOperation(button);
        break;
      case '=':
        this.handleEquals();
        break;
      case 'Clr':
        this.handleClear();
        break;
      default:
        break;
    }
  };

  handleNumber = (button: string) => {
    this.setState(prevState => {
      return {
        input: prevState.input * 10 + parseInt(button)
      };
    });
  };

  handleOperation = (button: Operation) => {
    this.setState({ operation: button });
  };

  handleEquals = () => {
    if (this.state.operation === Operations.None) {
      return;
    }

    const result = this.handleCalculation();

    this.setState(prevState => {
      return { total: result };
    });
  };

  handleClear = () => {
    this.setState(initialState);
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
