import './Lists.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';

const Lists = () => {
  const location = useLocation()
  
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [people, setPeople] = useState(location.state.people)

  const[clicked, setClicked] = useState(false)

  return (
    <>
      <Navbar/>
      <Header type = 'list'/>
      <div className="listPage">
        <div className="listPageContainer">
          <div className="listSearch">
            <h3>Search</h3>
            <div className="labelContainer">
              <label>
                Destination
              </label>
              <input type = 'text' value={destination}/>
            </div>
            <div className="labelContainer">
              <label>
                Check-in Date
              </label>
              <span onClick={()=>setClicked(!clicked)}>{format(date[0].startDate, "MM/dd/yyyy")} - {format(date[0].endDate, "MM/dd/yyyy")}</span>
              {clicked?
                <div className="datePicker">
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate = {new Date()}
                  />
                </div>:null}
            </div>
          </div>
          <div className="listResult">
            <p>
              here
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lists