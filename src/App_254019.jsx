import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLayout from './layout_250419/AppLayout'
import HomePage from './page_250419/Hompages/HomePage'
import MoviePage from './page_250419/Movies/MoviePage'
import MovieDetail from './page_250419/MovieDetail/MovieDetailPage'
import NotFoundPage from './page_250419/NotFoundPage/NotFoundPage'


// 홈페이지 
// 영화 전체 보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
// 영화 추천 페이지 /movies/:id/recomandation
// 영화 리뷰 페이지 /movies/:reviews
const App_254019 = () => {
	return (
		<div>
			<Routes>
				{/* user 화면 */}
				<Route path="/" element={<AppLayout/>}> 
					<Route index element={<HomePage/>}/>
					<Route path='movies'>
						<Route index element={<MoviePage/>} />
						<Route path=":id" element={<MovieDetail/>} />
					</Route>
					{/* <Route path="/movies" element={<MoviePage/>}/>
					<Route path="/movies/:id" element={<MovieDetailPage/>}/> */}
				</Route>

				<Route path="*" element={<NotFoundPage/>}></Route>
			</Routes>
		</div>
	)
}

export default App_254019
