import React, { Component } from "react";
import RefsDemo from "./RefsDemo";

export class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.compoRef=React.createRef();
    }
    clickHandler=()=>{
        this.compoRef.current.focusInput();
    }
  render() {
    return (
      <div>
        <RefsDemo ref={this.compoRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default FocusInput;
