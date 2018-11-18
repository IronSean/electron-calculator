// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Calculator.css';
import routes from '../../constants/routes';

type Props = {
  handleInput: (number: number) => void,
  handleAdd: () => void,
  handleSubtract: () => void,
  handleMultiply: () => void,
  handleDivide: () => void,
  handleEquals: () => void,
  handleClearTotal: () => void,
  handleClearInput: () => void,
  input: number,
  total: number
};

export default class Calculator extends Component<Props> {
  props: Props;

  render() {
    const {
      handleInput,
      handleAdd,
      handleSubtract,
      handleMultiply,
      handleDivide,
      handleEquals,
      handleClearTotal,
      handleClearInput,
      input,
      total
    } = this.props;
    return (
      <div>
        THIS IS THE CALCULATOR
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          Total: {total}, Input: {input}
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() => handleInput(7)}
            data-tclass="btn"
            type="button"
          >
            7
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(8)}
            data-tclass="btn"
            type="button"
          >
            8
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(0)}
            data-tclass="btn"
            type="button"
          >
            9
          </button>
          <button
            className={styles.btn}
            onClick={handleAdd}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(4)}
            data-tclass="btn"
            type="button"
          >
            4
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(5)}
            data-tclass="btn"
            type="button"
          >
            5
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(6)}
            data-tclass="btn"
            type="button"
          >
            6
          </button>
          <button
            className={styles.btn}
            onClick={handleSubtract}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>

          <button
            className={styles.btn}
            onClick={() => handleInput(1)}
            data-tclass="btn"
            type="button"
          >
            1
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(2)}
            data-tclass="btn"
            type="button"
          >
            2
          </button>
          <button
            className={styles.btn}
            onClick={() => handleInput(3)}
            data-tclass="btn"
            type="button"
          >
            3
          </button>
          <button
            className={styles.btn}
            onClick={() => handleMultiply}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-times" />
          </button>

          <button
            className={styles.btn}
            onClick={() => handleInput(0)}
            data-tclass="btn"
            type="button"
          >
            0
          </button>
          <button
            className={styles.btn}
            onClick={handleClearTotal}
            data-tclass="btn"
            type="button"
          >
            Clear Total
          </button>
          <button
            className={styles.btn}
            onClick={handleClearInput}
            data-tclass="btn"
            type="button"
          >
            Clear Input
          </button>
          <button
            className={styles.btn}
            onClick={handleDivide}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-divide" />
          </button>
        </div>
      </div>
    );
  }
}
