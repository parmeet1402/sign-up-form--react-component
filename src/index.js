import React from "react";
import ReactDOM from "react-dom";
import InputTextField from "./components/InputTextField";
import EmailInputField from "./components/EmailInputField";
import PasswordField from "./components/PasswordField";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="modal">
        <div className="all-inputs">
          <InputTextField placeholder="Parmeet Singh" />
          <EmailInputField placeholder="abc@gmail.com" />
          <PasswordField />
        </div>
        <button className="login--button">Log In</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
