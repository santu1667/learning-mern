import './App.css';
import data from './tabledata.json';
import BootStrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory from 'react-bootstrap-table2-filter';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

function App() {

  const [tabledata, setTableData] = useState(data);

  function filterTableData(event){
    console.log(event.target.value);
    var input = event.target.value;
    if(event.target.value==='')
        {
          console.log(tabledata);
          setTableData(data);
            return;
        }  
        console.log(tabledata);
        var filterData =  [];
        for(let key of data){
          if(key.first_name.toLowerCase().includes(input.toString().toLowerCase()) ||
          key.last_name.toString().toLowerCase().includes(input.toString().toLowerCase()) ||
             key.age.toString().toLowerCase().includes(input.toString().toLowerCase()) || 
             key.address.toString().toLowerCase().includes(input.toString().toLowerCase())||
             key.salary.toString().toLowerCase().includes(input.toString().toLowerCase()))
              {
              filterData.push(key)
              }
          }
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
     <BootStrapTable bootstrap4
              keyField="id" 
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
