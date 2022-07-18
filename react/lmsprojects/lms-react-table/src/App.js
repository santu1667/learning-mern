import './App.css';
import data from './tabledata.json';
import BootStrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import { useEffect, useState } from 'react';


function App() {

  const [tabledata, setTableData] = useState(data);

  function filterTableData(event){
    console.log(event.target.value);
    if(event.target.value==='')
        {
          console.log(tabledata);
          setTableData(data);
            return;
        }  
        console.log(tabledata);
        const filterData =  data.filter(o=>Object.keys(o).some(k=> 
          String(o[k]).toLowerCase().includes(event.target.value)));
          console.log(filterData);
          if(filterData!=null)
          {
            setTableData(filterData);
          }
  }
    const columns =[
    {dataField:"id", text:"Id",sort:true},
    {dataField:"first_name", text:"First Name",sort:true},
    {dataField:"last_name", text:"Last Name",sort:true},
    {dataField:"address", text:"Address",sort:true},
    {dataField:"age", text:"Age",sort:true},
    {dataField:"salary", text:"salary",sort:true}
]
  return (
    <div className="App">
     <h3>React DataGrid Table</h3>
     <div className='divInput'>
      <input placeholder='Search table' name="userValue" id="userValue"
        onChange={filterTableData}></input>
     </div>
     <BootStrapTable keyField="id" 
              data={tabledata} columns={columns} 
              striped hover condensed
              cellEdit={cellEditFactory({
                mode:"click",
                blurToSave:true,
                })}
                filter={filterFactory()}/>
    </div>
  );
}

export default App;
