import "./App.css";
import { Route, Routes } from 'react-router-dom';
import UploadImage from './UploadImage';
import DisplayImage from './DisplayImage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/upload' element={<UploadImage/>}></Route>
        <Route path='/delete' element={<DisplayImage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;