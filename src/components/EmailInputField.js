import React from "react";

function EmailInputField({ placeholder }) {
  return (
    <div className="input-container">
      <i className="fas fa-at icon" />
      <input type="email" required placeholder={placeholder} />
    </div>
  );
}

export default EmailInputField;
