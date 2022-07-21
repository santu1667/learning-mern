import './App.css';
import'bootstrap/dist/css/bootstrap.css';


function EnquirePage(props) {
  
  const course =props.course;

  function saveData(){
    alert('Saving data to JSON file')
    
  }
      
  return (
    <div className="App">
        <h4>Enquiry Page</h4>
        <div>
            <form>
              <p className="selectedCourse">Selected Course</p>
              <div>
                <span><b>Course Id :</b> {course.id}</span> 
                <span><b>Course Name :</b> {course.course_title}</span>
                <span><b>Course Instructor :</b> {course.course_provider}</span>
              </div>
              <div>
                <span><b>Course Duration :</b> {course.course_duration}</span> 
                <span><b>Course Fee :</b> {course.course_fee}</span>
              </div>
            </form>
        <p>User Forum</p>
            <form id="userDetails">
              <span>User Name: </span><input type="text" placeholder='Enter Name'></input>
              <span>User Ph#: </span><input type="text" placeholder='Enter Phone Number'></input>
              <span>User Address: </span><input type="text" placeholder='Enter Address'></input>
            </form>
        </div>
        <button onClick={saveData}> Submit Form</button>
    </div>
  );
}

export default EnquirePage;
