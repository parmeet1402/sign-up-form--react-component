import React from "react";
import ReactDOM from "react-dom";
import InputTextField from "./components/InputTextField";
import EmailInputField from "./components/EmailInputField";
import PasswordField from "./components/PasswordField";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("on change works");
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({});
  }
  render() {
    return (
      <div className="App">
        <form className="modal" onSubmit={this.handleSubmit}>
          <div className="all-inputs">
            <InputTextField
              placeholder="Parmeet Singh"
              handleChange={this.onChange}
              name="name"
              value={this.state.name}
            />
            <EmailInputField placeholder="abc@gmail.com" />
            <PasswordField />
          </div>
          <button className="login--button">Log In</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
