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

export class CalculatorView extends Component<Props> {
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
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('7')}
            >
              7
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('8')}
            >
              8
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('9')}
            >
              9
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('*')}
            >
              *
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('4')}
            >
              4
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('5')}
            >
              5
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('6')}
            >
              6
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('/')}
            >
              /
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('1')}
            >
              1
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('2')}
            >
              2
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('3')}
            >
              3
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('+')}
            >
              +
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('0')}
            >
              0
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('.')}
            >
              .
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('=')}
            >
              =
            </button>
            <button
              className={`${styles.calculatorButton}`}
              onClick={() => this.props.handleButton('-')}
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorView;
