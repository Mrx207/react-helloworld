import React, { Component } from "react";
import PortalDemo from "./components/PortalDemo";
import HooksCounter from "./components/HooksCounter";
import HookCounterOne from "./components/HookCounterOne";
// import ClickClass from "./components/ClickClass.js";
// import EventBind from "./components/EventBind.js";
// import Greet from "./components/Greet.js";
// import NameList from "./components/NameList.js";
// import ParentComponent from "./components/ParentComponent.js";
// import UserGreeting from "./components/UserGreeting.js";
// import Form from "./components/Form.js";
// import FragmentDemo from "./components/FragmentDemo.js";
// import FocusInput from "./components/FocusInput.js";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <PortalDemo></PortalDemo>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <HookCounterOne />
    </div>
  );
}

export default App;
