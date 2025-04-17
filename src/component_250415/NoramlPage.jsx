import React, { useEffect, useState } from 'react'

const NoramlPage = () => {
	// 일반 patch와 비교하기 위한 페이지임 
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState(null)
	const fetchPost = async () =>{
		setIsLoading (true)
		const url = "http://localhost:5000/posts"
		const response = await fetch(url)
		const data = await response.json()
		setIsLoading(false)
		setData(data)
	}

	useEffect(()=>{
		fetchPost()
	},[])

	if(isLoading){
		return <h1>Loading...</h1>
	}

	return (
		<div>
			{data?.map((item, index)=>(
				<div key={index}>{item.title}</div>
			))}
		</div>
	)
}

export default NoramlPage
