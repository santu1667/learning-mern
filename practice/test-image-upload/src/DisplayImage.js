import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function DisplayImage() {
const [data, setData] = useState([]);
useEffect(() => {
    axios
    .get("http://localhost:5000/api/v1/images")
    .then((res) => setData(res.data.images))
    .catch((err) => console.log(err, "it has an error"));
});

const handleDelete = ()=>{
    alert ('deleting Image');
}
console.log(data);

return (
    <div className="App">
    <h1>Image uploading react</h1>
    {data.map((singleData) => {
        const base64String = btoa(
        String.fromCharCode(...new Uint8Array(singleData.image.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} alt="name"/>
    })}
        <button className="btn btn-warning" id="delete-image" onClick={handleDelete}> Delete</button>
    </div>
  );
}

export default DisplayImage;