import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_250417/common.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component_250417/Navbar';
import Login from './page_250417/Login';
import ProductAll from './page_250417/ProductAll';
import PrivateRoute from './route_250417/PrivateRoute';
import '@fontsource/gaegu';

const App_250417 = () => {
  // true이면 로그인 false면 로그인 안됨
  const [authenticate,setAuthenticate] = useState(false)
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  )
}

export default App_250417
