
import { useEffect, useState } from 'react';
import Navbar from './component_250408/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_250408/common.css'
import { Routes, Route } from 'react-router-dom';
import Login from './page_250408/Login';
import ProductAll from './page_250408/ProductAll';
import ProductDetail from './page_250408/ProductDetail';
import PrivateRoute from './route_250408/PrivateRoute';


// 설치 
// yarn add json-server@0.17.4
// yarn run json-server --watch db.json --port 5000
const App_250408 = () => {
  // true이면 로그인 false면 로그인 안됨
  const [authenticate,setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  )
}

export default App_250408
