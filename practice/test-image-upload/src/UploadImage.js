import "./App.css";
import axios from "axios";
import { useState,useEffect,useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap';

function UploadImage(){
const [selectedFile, setselectedFile] = useState('');
const hiddenFileInput = useRef(null);
const [imageSrc,setImageSrc] = useState('./images/avatar.jpeg');


useEffect(() => {
    axios
    .get("http://localhost:5000/api/v1/images")
    .then((res) => setImageSrc(getImageURL(res.data)))
    .catch((err) => console.log(err, "it has an error"));
},[]);

function getImageURL(response){
    console.log(response)
    if(response!=null){
        console.log('Inside response'+response.images[0].imageURL);
        var url = response.images[0].imageURL ? response.images[0].imageURL: './images/avatar.jpeg';
        return url;
    }
}

const  handleDelete= ()=> {
    alert('About to delete Image')
    // axios
    // .delete("http://localhost:5000/api/v1/images")
    // .then((res) => setData(res.data.images))
    // .catch((err) => console.log(err, "it has an error"));
}

const  handleUpload= ()=> {
    hiddenFileInput.current.click();
}

const onImageUpload = (event)=>{
    if(event.target.files[0]){
        setselectedFile(event.target.files[0]);
        console.log(selectedFile);
        setImageSrc(URL.createObjectURL(event.target.files[0]));
    }
}

return (
    <div className="App">
    <h1>Image uploading react</h1>
        <Container>
            <Row>
                <Col xs={3}>
                <img src={imageSrc} alt="name"/>
                <div className="imageButtons">
                <button className="btn btn-warning" id="delete-image" onClick={handleDelete}> Delete</button>
                <button className="btn btn-primary" id="upload-image" onClick={handleUpload}> Upload</button>
                </div>
                <input type="file"  ref={hiddenFileInput} multiple accept="image/*" 
                    style={{display: 'none'}} onChange={onImageUpload} /></Col>
            </Row>
    </Container>
    </div>
);
}
export default UploadImage;