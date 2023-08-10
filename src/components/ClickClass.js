import React, { Component } from "react";

class ClickClass extends Component {
  _handleChange(e) {
    e.preventDefault();
    
    console.log("object");
  }
  render() {
    return (
      <div>
        <button onClick={this._handleChange}>ClickClass</button>
      </div>
    );
  }
}

export default ClickClass;
