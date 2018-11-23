// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Calculator.css';
import routes from '../../constants/routes';
import type { Operation } from '../../constants/Calculator';

type Props = {
  total: number,
  input: number,
  operation: Operation,
  handleButton: (button: string) => void
};

const buttons: string[] = [
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '/',
  '1',
  '2',
  '3',
  '+',
  '0',
  'Clr',
  '=',
  '-'
];

export class CalculatorView extends Component<Props> {
  renderButton = (button: string) => {
    return (
      <button
        className={`${styles.calculatorButton}`}
        onClick={() => this.props.handleButton(button)}
      >
        {button}
      </button>
    );
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div
          className={`calculator ${styles.calculator}`}
          data-tid="calculator"
        >
          <div className={`${styles.calculatorDisplay}`}>
            <div>{this.props.total}</div>
            <div>
              {this.props.operation} {this.props.input}
            </div>
          </div>
          <div className={`${styles.calculatorButtons}`}>
            {buttons.map(b => this.renderButton(b))}
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorView;
