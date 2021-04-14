import React from "react";
import Layout from "./components/layout";
import studentData from "./data/studentData"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout studentData={studentData}/>

      </div>
    );
  }
}

export default App;
