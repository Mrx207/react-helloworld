import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.state = {
      name: "welcome",
    };
  }

  handleState(e) {
    e.preventDefault();
    this.setState({
      name: "bara zala ala",
    });
  }

  //   hello = () => {
  //     return "Hello World!";
  //   };

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.handleState}> Event</button>
      </div>
    );
  }
}

export default EventBind;
