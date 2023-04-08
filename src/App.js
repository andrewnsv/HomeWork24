import "./App.css";
import React from "react";

import AddRecordForm from './components/AddRecordForm'
import PhoneBookRecords from './components/PhoneBookRecords'

function App() {
  return (
    <div className="App">
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;
