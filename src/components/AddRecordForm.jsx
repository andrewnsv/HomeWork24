import useAddRecords from '../hooks/useAddRecords'

import '../scss/addRerodsBtn.scss'
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
        <button className='add-record' onClick={addRecordHandler}>Add record</button>
      </>
    );
  };

export default AddRecordForm;