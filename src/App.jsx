
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import './App.css'
import WeatherDetail from './WeatherDetail'
import { useState } from 'react'
import axios from 'axios'


function App() {
  const [location, setLocation] = useState("")
  const [allWeatherDetails, setAllWeatherDetails] = useState({})
  const [isLocationvalid, setIsLocationvalid] = useState(false)


  const getWeatherDetails = async () => {

    try {

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)

      // console.log(response);
      setAllWeatherDetails(response.data)
      setIsLocationvalid(true)

    } catch (error) {
      console.log(error);
      alert("Please Enter correct Location")
      setLocation("")
      setIsLocationvalid(false)


    }
    
  }
   
  return (

    <div className='d-flex flex-column justi-content-center  align-items-center'>
      <h1 className=" fw-bolder text-white m-5 p-2">Weather App</h1>
      <div className='bg-transparent border rounded w-50  p-4' >
        <div className=" d-flex justify-content-center flex-wrap align-items-center" >

          <FloatingLabel
            controlId="floatingInput"
            label="Search Location"
            className="mb-3  w-50 "
          >
            <Form.Control value={location ||"" } onChange={e => setLocation(e.target.value)} type="text"  placeholder="Search Location" className=' rounded-pill ' />
          </FloatingLabel>
          <Button onClick={getWeatherDetails} variant="light" className='p-2  rounded-pill' style={{ marginLeft: "8px", marginTop: "-18px", height: "50px", width: "50px" }}><i class="fa-solid fa-magnifying-glass" ></i></Button>
        </div>
        {
          isLocationvalid &&
          (
            <WeatherDetail displayData={allWeatherDetails} />

          )

        }


      </div>

    </div>

  )
}

export default App
