import React from 'react'
import {useParams} from "react-router-dom"
import { Header } from '../components'
import { JobSlide } from '../components/JobSlide';


export const Job = ({darkMode , setDarkMode , data , setClassNamed , classNamed}) => {
  const { id } = useParams();
  const element = data.find((element) => element.id == id);
  classNamed = false
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setClassNamed = {setClassNamed} classNamed = {classNamed}/>
      <JobSlide element={element} darkMode={darkMode} />
    </>
  )
}

