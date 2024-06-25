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
                <div style={{marginTop:"2%"}}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate = {new Date()}
                  />
                </div>:null}
            </div>
            <div className="labelContainer">
              <label>Options</label>
              <div className="numberContainer">
                <label>Min price per night</label>
                <input type="text"/>
            </div>
            <div className="labelContainer">
              <div className="numberContainer">
                <label>Max price per night</label>
                <input type="text"/>
              </div>
            </div>
            <div className="labelContainer">
              <div className="numberContainer">
                <label>Adults</label>
                <input type="number" min={1} placeholder={people.adults}/>
              </div>
            </div>
            <div className="labelContainer">
              <div className="numberContainer">
                <label>Children</label>
                <input type="number" min={0}  placeholder={people.children}/>
              </div>
            </div>
            <div className="labelContainer">
              <div className="numberContainer">
                <label>Rooms</label>
                <input type="number" min={1}  placeholder={people.rooms}/>
              </div>
            </div>
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