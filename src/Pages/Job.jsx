import React from 'react'
import {useParams} from "react-router-dom"
import { Header } from '../components'

export const Job = ({darkMode , setDarkMode , data , setClassNamed , classNamed}) => {
  const { id } = useParams();
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} setClassNamed = {setClassNamed} classNamed = {classNamed}/>
      <div>
        {data.find((element) => element.id == id)?.position}
      </div>
    </>
  )
}

