import React from "react";
import Form from './components/Form.js';
import Class from './components/Class.js';
import RosterBox from './components/RosterBox.js';
import studentData from './data/studentData.js';

const App = () => {
  return (
    <div class="App">
      Hello World
      <RosterBox studentData={studentData}/>
      <Class />
      <Form hello='world'/>
    </div>
  );
}


export default App;
