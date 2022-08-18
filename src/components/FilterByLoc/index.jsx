import { FilterByLocFilter } from "../FilterByLocFilter"
import { FilterByLocIcon } from "../FilterByLocIcon"
import "./style.scss"

export const FilterByLoc = ({darkMode , setLoc}) => {
  
  return (
    <div className="filter-by-loc">
        <FilterByLocIcon/>
        <FilterByLocFilter darkMode = {darkMode} setLoc={setLoc}/>
    </div>
  )
}