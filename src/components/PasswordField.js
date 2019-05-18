import React from "react";

function PasswordField() {
  return (
    <div className="input-container">
      <i class="fas fa-lock icon" />
      <input type="password" required placeholder="Password" />
    </div>
  );
}

export default PasswordField;
