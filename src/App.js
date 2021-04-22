import React from "react";
import Characters from "./Characters"
import Classlist from './Classlist'


class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>Build a Class</h1>
        <Characters />
        <Classlist />
      </div>
    );
  }
}

export default App;
