import React from "react";

export const RecordDataContext = React.createContext({
  setRecords: () => {},
  records: []
});

const RecordDataContextProvider = (props) => {
  const [records, setRecords] = React.useState([])

  const getContextValue = () => {
    return {
      setRecords: (data) => setRecords(data),
      records
    }
  }

  return (
    <RecordDataContext.Provider value={getContextValue()}>
      {props.children}
    </RecordDataContext.Provider>
  );
};

export default RecordDataContextProvider;
