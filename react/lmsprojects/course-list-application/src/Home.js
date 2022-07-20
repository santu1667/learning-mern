import './App.css';
import React,{useState,useEffect} from 'react';
import'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';

function Home(props) {
  const setCourse =props.setCourse;
  const [courseList,setCourseList]=useState([]);
  let navigate = useNavigate();

  const handleClick = (course)=>{
    console.log(course);
    setCourse(course);
    navigate('/EnquirePage');
  }

  async function getCourses() {
        fetch('http://localhost:6700/courses')
            .then(response => response.json())
            .then(data => setCourseList(data));
    }
  useEffect(() => {
    getCourses();
  }, []);

  
  return (
    <div className="App">
      
    <h1>Course List Application</h1>
            <table>
            <tbody>
                <tr>
                    <th>Course Id</th>
                    <th>Title</th>
                    <th>Provider</th>
                    <th>Duration(Min)</th>
                    <th>Price($)</th>
                </tr>
                {courseList.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.course_title}</td>
                        <td>{item.course_provider}</td>
                        <td>{item.course_duration}</td>
                        <td>{item.course_fee}</td>
                        <td><button onClick={()=>handleClick(item)}>Enquire Now</button></td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
    
  );
}

export default Home;
