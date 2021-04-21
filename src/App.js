import React from "react";
import StudentObject from './data/studentData';
import StudentList from './Components/StudentList';
import EnrolledList from './Components/EnrolledList';
import TeacherEnrollment from './Components/TeacherEnrollment';

class App extends React.Component {
  

  render() {
    

    return (
      <div className="App">
          <StudentList students={StudentObject} />
          <EnrolledList />
      </div>
    );
  }
}

export default App;
