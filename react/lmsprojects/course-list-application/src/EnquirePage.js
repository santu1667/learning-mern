import './App.css';
import'bootstrap/dist/css/bootstrap.css';

function EnquirePage(props) {
    const course =props.course;  
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
              <label>User Name: </label><input type="text" placeholder='Enter Name'></input>
              <label>User Ph#: </label><input type="text" placeholder='Enter Phone Number'></input>
              <br></br>
              <label>User Address: </label><input type="text" placeholder='Enter Address'></input>
            </form>
        </div>
        <button> Submit Form</button>
    </div>
  );
}

export default EnquirePage;
