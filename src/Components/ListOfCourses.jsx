    import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import { ListOfCourse } from '../Service/ServiceScript';


function ListOfCourses() {

 const [course,setCourse]=useState([]);

 useEffect(() =>{
    getAllCourse();
 },[])

 function getAllCourse(){
    ListOfCourse().then((response)=>{
       setCourse(response.data)
    }).catch(err => console.error(err))
 }

 const navigator=useNavigate();

 function addNewStudent(id){
    navigator(`/add-student/${id}`);
 }

  return (
   <>
         <div className='container  '>
              <h2 className='text-center'>Courses List</h2>
            <br /><br />
        <div className='row justify-content-center'>

           { 
            course.map(course =>
            <div key={course.id} className='card shadow-lg col-6 col-md-3 m-4 '>

              <img src={`/assets/${course.urlImg}`} alt={course.title} className="CourseImg" />
                    <p>Course Name: {course.courseName}</p>
                    <p>Trainer Name: {course.trainerName}</p>
                    <p>Duration: {course.duration}</p>
                    <button className='btn btn-primary mb-3' onClick={() =>addNewStudent(course.id)}>Register</button>

            </div>
            )
           } 

        </div>
  
    
    </div>

   </>
  )
}

export default ListOfCourses