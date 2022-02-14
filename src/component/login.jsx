import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="d-flex">Login</h1>
          {this.renderLoginForm()}
        </div>
      </div>
    );
  }
  renderLoginForm = () => {
    return (
      <div>
        <div>
          <input placeholder="UserName" className="p-2"></input>
        </div>
        <div>
          <input placeholder="Password" className="p-2"></input>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    );
  };
}
export default Login;
