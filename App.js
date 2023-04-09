import React, { Component } from "react";
import Greet from "./src/components/Greet.js";
import Welcome from "./Welcome.js";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input></input>
          <Greet name="rushi"></Greet>
          <Welcome name="rushi"></Welcome>
        </form>
      </div>
    );
  }
}

export default App;
