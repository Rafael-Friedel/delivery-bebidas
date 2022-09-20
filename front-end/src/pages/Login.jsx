import React from 'react';

function Login() {
  return (
    <form>
      <label htmlFor="email">
        EMAIL:
        <input id="email" />
      </label>
      <label htmlFor="password">
        PASSWORD:
        <input id="password" />
      </label>
      <button type="button">Enter</button>
    </form>
  );
}

export default Login;
