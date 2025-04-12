
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App_250412 from './App_250412';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App_250412 />} />
    </Routes>
  </BrowserRouter>
)
