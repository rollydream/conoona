
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_250408/common.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component_250408/Navbar';
import Login from './page_250408/Login';
import ProductAll from './page_250408/ProductAll';
import PrivateRoute from './route_250408/PrivateRoute';
import '@fontsource/gaegu';

// 설치 
// yarn add json-server@0.17.4
// yarn run json-server --watch db.json --port 5000
// yarn add @fontsource/gaegu
const App_250408 = () => {
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

export default App_250408
