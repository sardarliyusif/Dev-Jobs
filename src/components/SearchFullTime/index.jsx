import {React} from 'react'
import "./style.scss"
import "../../styles/variable.scss"

export const SearchFullTime = ({darkMode , setTime}) => {
  const handleTime = () => {
    setTime((prev) => !prev)
  }
  return (
    <div className='full-time-only' >
        <input 
            className='full-time-only-input'
            id="full-time-only-input"
            type="checkbox"
            onClick={handleTime}
        />
        <label 
            className={`full-time-only-label ${darkMode ? "dark-text-color" : "light-text-color"}`}
            htmlFor="full-time-only-input">
              Full Time
        </label>
    </div>
  )
}
