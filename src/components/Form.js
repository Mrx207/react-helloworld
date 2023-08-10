import React, { Component } from "react";
import "../styles/FormStyles.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this._handleUserNameChange = this._handleUserNameChange.bind(this);
    this.state = {
      loginForm: { username: "" },
    };
  }

  _handleUserNameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  _handleSubmit = (e) => {
    console.log(e.target.value);
    alert(`${this.state.username}`);
  };

  render() {
    return (
      <div className="form">
        <h3>Login Form</h3>
        <form name="loginForm" onSubmit={this._handleSubmit}>
          <div className="inputField">
            <label>Username</label>
            <input
              value={this.state.username}
              type="text"
              onChange={this._handleUserNameChange}
            />
          </div>
          <div className="inputField">
            <label>Comments</label>
            <input
              value={this.state.textArea}
              type="textArea"
              onChange={this._handlemmUserNameChange}
            />
          </div>
          <div className="inputField">
            <label>Password</label>
            <input type="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
