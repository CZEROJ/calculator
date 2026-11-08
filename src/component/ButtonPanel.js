import "./ButtonPanel.css";

import PropTypes from "prop-types";
import React from "react";

import Button from "./Button";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    before: PropTypes.bool,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name={this.props.before ? "7" : "1"} clickHandler={this.handleClick} />
          <Button name={this.props.before ? "8" : "2"} clickHandler={this.handleClick} />
          <Button name={this.props.before ? "9" : "3"} clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name={this.props.before ? "1" : "7"} clickHandler={this.handleClick} />
          <Button name={this.props.before ? "2" : "8"} clickHandler={this.handleClick} />
          <Button name={this.props.before ? "3" : "9"} clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
