import React, { useState } from "react";
import "../App.css";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  return (
    <div className="father">
      <form>
        <label htmlFor="userName">User Name: </label>
        <input
          type="text"
          id="userName"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password"> password: </label>
        <input
          type="password"
          id="password"
          placeholder="password..."
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="repeatPassword"> repeat Password: </label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="repeat  password..."
          value={passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
        />
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
