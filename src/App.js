import React from "react";
import studentData from "./data/studentData"
import Students from "./Components/Students"
import TeacherEnrollment from "./Components/TeacherEnrollment"
import ClassEnrollment from "./Components/ClassEnrollment"


class App extends React.Component {

  handleClick = () => {

  }





  render() {
    return (
      <div>
        <Students studentData={studentData} handleClick={this.handleClick}/>
        <TeacherEnrollment />
        <ClassEnrollment />
      </div>
    );
  }
}

export default App;
