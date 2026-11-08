import './App.css';

import React from 'react';

import calculate from '../logic/calculate';

import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    const before = new URLSearchParams(window.location.search).get('version') === 'before';
    return (
      <div className={`component-app${before ? ' version-before' : ''}`}>
        <Display value={
      this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} before={before} />
      </div>
    );
  }
}
