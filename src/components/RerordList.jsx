import React from 'react'
import PhoneCard from './PhoneCard'

import useDeleteRecords from '../hooks/useDeleteRecords'
import useEdithRecords from '../hooks/useEditRecords'

const RecordList = (props) => {
    const { delRecord } = useDeleteRecords();
    const { editRecord } = useEdithRecords();
    const [editIndex, setEditIndex] = React.useState(null);
    const [newData, setNewData] = React.useState({});
  
    const deleteHandler = (id) => {
      delRecord(id);
    };
  
    const editHandler = (id) => {
      setEditIndex(id);
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
  
                  <button onClick={() => saveHandler(index, newData)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  <PhoneCard>
                    {record.name} {record.surname} {record.phone}
                  </PhoneCard>
                  <button onClick={() => deleteHandler(index)}>Delete</button>
                  <button onClick={() => editHandler(index)}>Edit</button>
                </>
              )}
            </div>
          ))}
      </div>
    );
  };

export default RecordList