import "./App.css";
import React from "react";

import AddRecordForm from "./components/AddRecordForm";
import PhoneBookRecords from "./components/PhoneBookRecords";
import RecordDataContextProvider from './providers/recordDataContex'

function App() {
  return (
    <RecordDataContextProvider>
      <div className="App">
        <AddRecordForm />
        <PhoneBookRecords />
      </div>
    </RecordDataContextProvider>
  );
}

export default App;
