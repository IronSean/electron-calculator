// @flow
import React, { Component } from 'react';
import * as Actions from '../../actions/calculator';
import CalculatorView from './CalculatorView';

type Props = {
  addToTotal: typeof Actions.addToTotal,
  multiplyTotal: typeof Actions.multiplyTotal,
  subtractFomTotal: typeof Actions.subtractFomTotal,
  divideTotal: typeof Actions.divideTotal,
  setTotal: typeof Actions.setTotal,
  clearTotal: typeof Actions.clearTotal,
  total: number
};

type State = {
  input: number
};

export default class Calculator extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: 0 };
  }

  props: Props;
  state: State;

  handleInput = (number: number) => {
    this.setState(prevState => {
      return { input: prevState.input * 10 + number };
    });
  };

  handleClearInput = () => {
    this.setState({ input: 0 });
  };

  handleAdd = () => {
    this.props.addToTotal(this.state.input);
  };

  handleSubtract = () => {
    this.props.subtractFomTotal(this.state.input);
  };

  handleMultiply = () => {
    this.props.multiplyTotal(this.state.input);
  };

  handleDivide = () => {
    this.props.divideTotal(this.state.input);
  };

  handleEquals = () => {
    this.props.setTotal(this.state.input);
  };

  handleClearTotal = () => {
    this.props.clearTotal();
  };

  render() {
    return (
      <CalculatorView
        handleInput={this.handleInput}
        handleAdd={this.handleAdd}
        handleClearInput={this.handleClearInput}
        handleClearTotal={this.handleClearTotal}
        handleDivide={this.handleDivide}
        handleEquals={this.handleEquals}
        handleMultiply={this.handleMultiply}
        handleSubtract={this.handleSubtract}
        input={this.state.input}
        total={this.props.total}
      />
    );
  }
}
