import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.refInput = React.createRef();
  }

  focusInput() {
    this.refInput.current.focus();
  }
  
  render() {
    return (
      <div>
        <input type="text" ref={this.refInput}></input>
      </div>
    );
  }
}

export default RefsDemo;
