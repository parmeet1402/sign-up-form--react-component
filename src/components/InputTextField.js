import React, { Component } from "react";

class InputTextField extends Component {
  render() {
    return (
      <div className="input-container">
        <i className="fas fa-user icon" />
        <input type="text" required placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default InputTextField;
