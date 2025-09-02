import { useState } from 'react'

import HeaderComponent from './Components/HeaderComponent'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import  './App.css';

import StudentComponent from './Components/StudentComponent'
import ListOfCourses from './Components/ListOfCourses';
function App() {


  return (
    <>
        <BrowserRouter>
        <HeaderComponent/>
       <Routes>

        <Route path='/' element={<ListOfCourses/>}></Route>
        

        <Route path='/add-student/:id' element={<StudentComponent/>}></Route>

       </Routes>
       
      

       </BrowserRouter>
    </>
  )
}

export default App