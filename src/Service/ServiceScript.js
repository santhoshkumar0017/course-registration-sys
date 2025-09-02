import axios from 'axios'

const REST_API_URL='https://cr-system-host-50032862328.development.catalystappsail.in/';

const COURSE_API_URL='https://cr-system-host-50032862328.development.catalystappsail.in/course'

export const ListOfCourse=() =>axios.get(COURSE_API_URL+'-getAll');

export const getCourse=(id) => axios.get(COURSE_API_URL+'-get/'+id)

export const createStudent=(student) => axios.post(REST_API_URL+'/add',student);