import React from 'react'
import Spots from './Spots'
import beirut from './images/beirut-beach.jpeg'
import "./styles.css"

const vacationSpots = [
    {
      id: 1,
      place: "Beirut, Lebanon",
      price: 1200,
      timeToGo: "All year",
      imgURL: beirut
    },{
      id: 2,
      place: "Cancun, Mexico",
      price: 600,
      timeToGo: "Winter",
      imgURL: beirut
    },{
      id: 3,
      place: "Tokyo, Japan",
      price: 1200,
      timeToGo: "Fall",
      imgURL: beirut
    },{
      id: 4,
      place: "Barcelona, Spain",
      price: 500,
      timeToGo: "Spring",
      imgURL: beirut
    },{
      id: 5,
      place: "Capetown, South Africa",
      price: 2200,
      timeToGo: "Spring",
      imgURL: beirut
    }
  ]
  console.log(vacationSpots)

const App = () => {
    const mappedVacations = vacationSpots.map((spot) => {
        return <Spots id={spot.id} place={spot.place} price={spot.price} time={spot.timeToGo} image={spot.imgURL} />
    })

    return (
        <>
        <div className='main-container'>
        <h1>Vacation Bucket List</h1>
            {mappedVacations}
        </div>
        </>
    )
}

export default App 