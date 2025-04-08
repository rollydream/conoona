import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App_250408 from './App_250408'

// 1. 전체상품페이지, 로그인 페이지 
// 2. 전체 상품페이지에서는 전체상품
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App_250408 />} />
    </Routes>
  </BrowserRouter>
)
