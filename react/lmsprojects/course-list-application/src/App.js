import './App.css';
import'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import EnquirePage from './EnquirePage';
import {useState} from 'react';
import Home from './Home';

function App() {
  
  const [course,setCourse] =useState(null);
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/EnquirePage" element={<EnquirePage course={course}/>} />
    <Route path="/" element={<Home setCourse={setCourse}/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
