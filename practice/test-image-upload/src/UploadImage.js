import "./App.css";
import axios from "axios";
import { useState,useEffect,useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col} from 'react-bootstrap';

function UploadImage(){
const [selectedFile, setselectedFile] = useState('');
const hiddenFileInput = useRef(null);
const [imageSrc,setImageSrc] = useState('./images/avatar.jpeg');
const [name,setName] = useState('');

useEffect(() => {
    axios
    .get("http://localhost:5000/api/v1/images")
    .then((res) => setImageSrc(getImageURL(res.data)))
    .catch((err) => console.log(err, "it has an error"));
},[]);

function getImageURL(response){
    if(response!=null){
        console.log('Inside response');
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(response.images[0].image.data.data)));
                setName(response.images[0].name)
                console.log(`data:image/png;base64,${base64String}`);
            return `data:image/png;base64,${base64String}`;
    }
    return './images/avatar.jpeg';
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
    // try{
    //     var request ={name :name,testImage: selectedFile}
    //     var response = axios.patch('http://localhost:5000/api/v1/profile/image',
    //         request)
    //     console.log(response);
    //     }
    // catch(exception)
    // {
    //     console.log(exception);
    //     if(exception.response.status === 400){console.log('Error Occured'); }
    // }
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
            <Row>
                <Col xs={3}>
                    <img src={require('C:/Users/gsant/Desktop/testImage.png')} alt="test"></img>
                </Col>
            </Row>
    </Container>
    </div>
);
}

export default UploadImage;