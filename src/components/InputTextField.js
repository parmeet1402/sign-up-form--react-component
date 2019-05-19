import React, { Component } from "react";

class InputTextField extends Component {
  render() {
    return (
      <div className="input-container">
        <i className="fas fa-user icon" />
        <input
          type="text"
          value={this.props.value}
          required
          name={this.props.name}
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default InputTextField;
