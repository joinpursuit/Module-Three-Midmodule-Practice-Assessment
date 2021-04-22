import React from "react";
import BuildAClass from "./Components/BuildAClass"
import Enrolled from "./Components/Enrolled"
import TeacherEnrollment from "./Components/TeacherEnrollment"


class App extends React.Component {
  render() {
    
    return (
      <div class="App">
        
        <BuildAClass/>
        {/* <Enrolled/> */}
        <TeacherEnrollment/>
        

      </div>
    );
  }
}

export default App;
