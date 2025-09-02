import { useState } from 'react'

import HeaderComponent from './Components/HeaderComponent'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import  './App.css';

import StudentComponent from './Components/StudentComponent'
import ListOfCourses from './Components/ListOfCourses';
function App() {


  return (
    <>
       <BrowserRouter basename="/course-registration-sys">
  <HeaderComponent />
  <Routes>
    <Route path="/" element={<ListOfCourses />} />
    <Route path="/add-student/:id" element={<StudentComponent />} />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App