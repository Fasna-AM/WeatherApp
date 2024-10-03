import { Col, Image, Row } from 'react-bootstrap'
import cloud from './assets/cloud.png'
import pressureImg from './assets/pressure.png'
import windImg from './assets/wind.png'
import humidityImg from './assets/humidity.png'

const WeatherDetail = ({displayData}) => {

    const {main,wind,name} = displayData
 
  // console.log(displayData);
  
  
  return (
    <>
    
      <div className='d-flex flex-column justify-content-center align-items-center  text-white' style={{transition:"border 0.5s"}} >
      <Image src={cloud} style={{ width: "10rem",marginTop:"-15px" }} fluid />
      <h1>{main.temp}<sup>0</sup>C</h1>
      <div className='d-flex mt-2'>
      <i className="fa-solid fa-location-dot mt-4" style={{ fontSize: "25px",color:"black",  padding: "8px" }}></i>
      <h2 className='mt-4 mb-4'>{name}</h2>

      </div>
      <div className="d-flex justify-content-evenly flex-wrap w-100 mt-5">
          <Row >
            <Col>
              <Image src={pressureImg} style={{ width: "3rem" }} fluid />
            </Col>
            <Col className='' style={{marginLeft:"-3rem"}} >
              <Row>
                <Col>
                
                  <h6>{main.pressure} pa</h6>
                </Col>
                <Col>
                  <h6>Pressure</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row >
            <Col>
              <Image src={windImg} style={{ width: "3rem" }} fluid />
            </Col>
            <Col className='' style={{marginLeft:"-3rem"}} >
              <Row>
                <Col>
                  <h6>{wind.speed} m/s</h6>
                </Col>
                <Col>
                  <h6>Wind</h6>
                </Col>
              </Row>
            </Col>
          </Row>
           <Row >
            <Col>
              <Image src={humidityImg} style={{ width: "4rem",marginTop:"7px" }} fluid />
            </Col>
            <Col className='' style={{marginLeft:"-4rem"}} >
              <Row>
                <Col>
                  <h6>{main.humidity} %</h6>
                </Col>
                <Col>
                  <h6>Humidity</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        
      </div>

    </div>
    
    </>

  )
}

export default WeatherDetail