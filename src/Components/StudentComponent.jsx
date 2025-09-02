import React, { useEffect, useState } from 'react'

import { createStudent, getCourse } from '../Service/ServiceScript';
import { useNavigate, useParams } from 'react-router-dom';
function StudentCompontent() {
       
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [courseName,setCourseName]=useState("");

  const[errors,setErrors]=useState({
    firstName:"",
    lastName:"",
    email:"",
    courseName:""
  })

  const {id} =useParams();

  useEffect(() =>{
    if(id){
      getCourse(id).then((response)=>{
        setCourseName(response.data.courseName)
      }).catch(err => console.error(err))
    }
  },[id])

  const navigate=useNavigate();

  function saveFunction(e){
    e.preventDefault();
   
    if(validCheckFunction()){
   
      const student={firstName,lastName,email,courseName}
      
      createStudent(student).then((response) =>{
          console.log(response.data);
          navigate('/');
      }).catch(error => console.error(error));

    }

  }

  function validCheckFunction(){
      const errorsCopy={...errors}
     let valid=true;

    if(firstName.trim()) {
      errorsCopy.firstName=''
       valid= true;
    } 
    else {
      errorsCopy.firstName='Enter the first name'
        setErrors(errorsCopy);
        valid= false;
    }

    if(lastName.trim()) {
      errorsCopy.lastName=''
       valid= true;
    } 
    else {
      errorsCopy.lastName='Enter the last name'        
        setErrors(errorsCopy);
        valid= false;
    }

     if(email.trim()) {
      errorsCopy.email=''
       valid= true;
    } 
    else {
      errorsCopy.email='Enter the email'        
        setErrors(errorsCopy);
        valid= false;
    }

     if(courseName.trim()) {
      errorsCopy.courseName=''
       valid= true;
    } 
    else {
      errorsCopy.courseName='Enter the course name'        
        setErrors(errorsCopy);
        valid= false;
    }

    return valid;

  }

  return (
    <div>
        <div className='container '>
          <br /><br />

          <div className='row'>
                
               <div className='card shadow  shodow-lg col-md-6  offset-md-3 offset-md-3'> 
                  <h2 className='text-center'>Register Form</h2>   
                <div className='card-body  '>

                 <form action="">

                  <div className='form-group mb-2 '>
                      <label className='form-label'>First name</label>    
                      <input type="text"  required placeholder='Enter your firstname'
                       value={firstName}  name='firstName'
                      className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                       onChange={(e) => setFirstName(e.target.value)}
                       />  

                       {errors.firstName && <div className='invalid-feeback'> 
                              {errors.firstName} </div>}             
                  </div>

                   <div className='form-group mb-2 '>
                      <label className='form-label'>Last name</label>    
                      <input type="text"  required placeholder='Enter your last name'
                       value={lastName}  name='lastName'
                      className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                       onChange={(e) => setLastName(e.target.value)}
                       />  

                       {errors.lastName && <div className='invalid-feeback'> 
                              {errors.lastName} </div>}             
                  </div>
                      
                   <div className='form-group mb-2 '>
                      <label className='form-label'>Email</label>    
                      <input type="text"  required placeholder='Enter your email name'
                       value={email}  name='email'
                      className={`form-control ${errors.email ? 'is-invalid':''}`}
                       onChange={(e) => setEmail(e.target.value)}
                       />  

                       {errors.email && <div className='invalid-feeback'> 
                              {errors.email} </div>}             
                  </div>

                   <div className='form-group mb-2 '>
                      <label className='form-label'>Course name</label>    
                      <input type="text"  required placeholder='Enter your course name'
                       value={courseName}  name='courseName' readOnly
                      className={`form-control ${errors.courseName ? 'is-invalid':''}`}
                       onChange={(e) => setCourseName(e.target.value)}
                       />  

                       {errors.courseName && <div className='invalid-feeback'> 
                              {errors.courseName} </div>}             
                  </div>
                  

                   <button className='btn btn-success' onClick={saveFunction}>Submit</button>

                 </form>

                </div>
              </div> 
          </div>

        </div>
    </div>
  )
}

export default StudentCompontent