// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Calculator.css';
import routes from '../../constants/routes';
import type { Operation } from '../../constants/Operations';

type Props = {
  total: number,
  input: number,
  operation: Operation
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
            <button className={`${styles.calculatorButton}`}>7</button>
            <button className={`${styles.calculatorButton}`}>8</button>
            <button className={`${styles.calculatorButton}`}>9</button>
            <button className={`${styles.calculatorButton}`}>*</button>
            <button className={`${styles.calculatorButton}`}>4</button>
            <button className={`${styles.calculatorButton}`}>5</button>
            <button className={`${styles.calculatorButton}`}>6</button>
            <button className={`${styles.calculatorButton}`}>/</button>
            <button className={`${styles.calculatorButton}`}>1</button>
            <button className={`${styles.calculatorButton}`}>2</button>
            <button className={`${styles.calculatorButton}`}>3</button>
            <button className={`${styles.calculatorButton}`}>+</button>
            <button className={`${styles.calculatorButton}`}>0</button>
            <button className={`${styles.calculatorButton}`}>.</button>
            <button className={`${styles.calculatorButton}`}>=</button>
            <button className={`${styles.calculatorButton}`}>-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorView;
