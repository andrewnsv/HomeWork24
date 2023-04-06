import "./App.css";
import React from "react";

import useFetchRecords from "./hooks/useFetchRecords";
import useAddRecords from "./hooks/useAddRecords";
import useDeleteRecords from "./hooks/useDeleteRecords";
import useEdithRecords from "./hooks/useEditRecords";

const PhoneCard = (props) => {
  return <div>{props.children}</div>;
};

const RecordList = (props) => {
  const { delRecord } = useDeleteRecords();
  const { editRecord } = useEdithRecords();
  const [editIndex, setEditIndex] = React.useState(null);
  const [newData, setNewData] = React.useState({});

  const deleteHandler = (id) => {
    delRecord(id);
  };

  const editHandler = (index) => {
    setEditIndex(index);
  };

  const saveHandler = (id, newData) => { 
    editRecord(id, newData);
    setEditIndex(null);
  };

  return (
    <div>
      {props.recordList?.data.map((record, index) => (
          <div key={`phone-card-${index}`}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  defaultValue={record.name}
                  onChange={(e) =>{
                    setNewData({ ...newData, name: e.target.value })
                  }}
                />

                <input
                  type="text"
                  defaultValue={record.surname}
                  onChange={(e) =>
                    setNewData({ ...newData, surname: e.target.value })
                  }
                />

                <input
                  type="text"
                  defaultValue={record.phone}
                  onChange={(e) =>
                    setNewData({ ...newData, phone: e.target.value })
                  }
                />

                <button onClick={() => saveHandler(record.id, newData)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <PhoneCard>
                  {record.name} {record.surname} {record.phone}
                </PhoneCard>
                <button onClick={() => deleteHandler(record.id)}>Delete</button>
                <button onClick={() => editHandler(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

const AddRecordForm = () => {
  const { addRecord } = useAddRecords();

  const addRecordHandler = () => {
    addRecord({
      name: "fios2",
      surname: "wild",
      phone: "+380730000000",
    });
  };

  return (
    <>
      <button onClick={addRecordHandler}>Add record</button>
    </>
  );
};

const PhoneBookRecords = () => {
  const { data, loading, error } = useFetchRecords();

  if (error) {
    return <h1 style={{ color: "red" }}>We have a problem</h1>;
  }

  return <>{loading ? <p>loading...</p> : <RecordList recordList={data} />}</>;
};

function App() {
  return (
    <div className="App">
      <AddRecordForm />
      <PhoneBookRecords />
    </div>
  );
}

export default App;
