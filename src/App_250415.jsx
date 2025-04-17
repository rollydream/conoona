import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import HomePage from './component_250415/HomePage'
import ReactQueryPage from './component_250415/ReactQueryPage'
import NoramlPage from './component_250415/NoramlPage'
const App_250418 = () => {
  return (

    // react-query 설치 
    // yarn add @tanstack/react-query
    // yarn add @tanstack/react-query-devtools
    // yarn add json-server

    // 설치 됐는지 확인 하기 
    // yarn list --pattern json-server

    // axios 설치
    // yarn add axios

    <div>
      <nav>
        <Link to="/" >Hompage</Link>
        <Link to="/react-query" >React Query</Link>
        <Link to="/normal-page" >normal-page</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
        <Route path='/normal-page' element={<NoramlPage />} />
      </Routes>
    </div>
  )
}

export default App_250418
