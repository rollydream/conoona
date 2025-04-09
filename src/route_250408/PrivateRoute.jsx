import React from 'react'
import ProductDetail from '../page_250408/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
	// 로그인 했으면 상품 상세페이지로
	// 안되어있으면 로그인 페이지로
	return authenticate == true?<ProductDetail/>:<Navigate to="/login"/>
}

export default PrivateRoute
