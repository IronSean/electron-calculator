// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Calculator.css';
import routes from '../../constants/routes';
import * as Actions from '../../actions/calculator';

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

  handleNumber = (number: number) => {
    this.setState(prevState => {
      return { input: prevState.input * 10 + number };
    });
  };

  handleAdd = () => {};

  render() {
    const {
      addToTotal,
      multiplyTotal,
      subtractFomTotal,
      divideTotal,
      setTotal,
      clearTotal,
      total
    } = this.props;
    const { input } = this.state;
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
            onClick={() => this.handleNumber(7)}
            data-tclass="btn"
            type="button"
          >
            7
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(8)}
            data-tclass="btn"
            type="button"
          >
            8
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(0)}
            data-tclass="btn"
            type="button"
          >
            9
          </button>
          <button
            className={styles.btn}
            onClick={() => addToTotal(input)}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-plus" />
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(4)}
            data-tclass="btn"
            type="button"
          >
            4
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(5)}
            data-tclass="btn"
            type="button"
          >
            5
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(6)}
            data-tclass="btn"
            type="button"
          >
            6
          </button>
          <button
            className={styles.btn}
            onClick={() => subtractFomTotal(input)}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-minus" />
          </button>

          <button
            className={styles.btn}
            onClick={() => this.handleNumber(1)}
            data-tclass="btn"
            type="button"
          >
            1
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(2)}
            data-tclass="btn"
            type="button"
          >
            2
          </button>
          <button
            className={styles.btn}
            onClick={() => this.handleNumber(3)}
            data-tclass="btn"
            type="button"
          >
            3
          </button>
          <button
            className={styles.btn}
            onClick={() => multiplyTotal(input)}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-times" />
          </button>

          <button
            className={styles.btn}
            onClick={() => this.handleNumber(0)}
            data-tclass="btn"
            type="button"
          >
            0
          </button>
          <button
            className={styles.btn}
            onClick={clearTotal}
            data-tclass="btn"
            type="button"
          >
            clear
          </button>
          <button
            className={styles.btn}
            onClick={clearTotal}
            data-tclass="btn"
            type="button"
          >
            <i className="fa fa-equals" />
          </button>
          <button
            className={styles.btn}
            onClick={divideTotal(input)}
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
