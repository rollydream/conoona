import React, { useEffect , useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_250404/common.css'
import BtnBox from './component_250404/BtnBox';
import Box from './component_250404/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

//VITE에서 API 키 숨김
// 1. .env 파일 생성 후(VITE_API_KYE="") 작성
// 2. 파일로 돌아와서 import.mata.env.(VITE_API_KYE)로 가져옴
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEAHTER_API_KYE

// 부트 스트랩 설치 
// yarn 설치
// yarn add react-bootstrap bootstrap

// API 문서 : https://openweathermap.org/api 

// 1. 현재 위치의 날씨(지역, 온도, 날씨 상태)
// 2. 다른 도시의 버튼
// 3. 다른 도시의 버튼 클릭하면 해당 도시의 날씨 정보
// 4. 데이터가 로딩되는 동안 로딩 스피너

// 현재 위치 가져오기 : https://www.w3schools.com/html/html5_geolocation.asp
// navigator.geolocation.getCurrentPosition(success, error) 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App_250404 = () => {
  let [loading, setLoading] =useState(false)
  const [weather, setWeather] = useState(null)
  const [city, setCity]=useState('')
  const cities = ['paris','new york', 'tokyo', 'seoul']

  const getCurrentPosition = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon= position.coords.longitude

        getWeatherByCurrentLocation(lat, lon)
      }
    )
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
      let res = await fetch(url);
      let data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const getWeatherByCity= async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    setWeather(data)
    setLoading(false);
  }

  useEffect(()=>{
    setLoading(true);
    if(city == ""){
      getCurrentPosition()
    }else{
      getWeatherByCity()
    }
  }, [city])


  return (
    <>
      <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-4">
        {loading ? (
          <Row className="w-100 justify-content-center align-items-center" style={{ height: '60vh' }}>
            <Col xs="auto">
              <Spinner animation="border" variant="primary" />
            </Col>
          </Row>
        ) : (
          <>
            <Row className="mb-4 w-100 justify-content-center">
              <Col xs={12} md={6}>
                <Box weather={weather} />
              </Col>
            </Row>
            <Row className="g-2 w-100 justify-content-center">
              <BtnBox cities={cities} setCity={setCity} selectedCity={city} />
            </Row>
          </>
        )}
      </Container>
    </>
  )
}

export default App_250404
