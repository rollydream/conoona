
import Navbar from './component_250408/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_250408/common.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './page_250408/Login';
import ProductAll from './page_250408/ProductAll';
import ProductDetail from './page_250408/ProductDetail';
// 설치 
// yarn add json-server@0.17.4
// yarn run json-server --watch db.json --port 5000
const App_250408 = () => {
  return (
    <div>
      <Navbar />
      <Routes path="/*" element={<ProductAll />}>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App_250408
