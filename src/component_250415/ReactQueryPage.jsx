import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePostQuery } from '../hooks_250415/usePosts'

// axios 설치
// yarn add axios
const ReactQueryPage = () => {
	const ids = [1,2,3,4]

	const fetchPostDetail=(id)=>{
		return axios.get(`http://localhost:5000/posts/${id}`)
	}
	
	const result = useQueries({
		queries: ids.map((id)=>{
			return {
				queryKey:["posts", id],
				queryFn : ()=> fetchPostDetail(id)
			}
		}),
		combine: (result)=>{
			return{
				data: result.map((result)=>result.data.data)
			}
		}
	})

	// if(isLoading){
	// 	return <h1>Loading...</h1>
	// }
	// if(isError){
	// 	return <div>{error.message}</div>
	// }

	console.log(result)
	return (
		<div>
			{/* data.data >> 말구 data로 사용하고 싶으면 select 옵션을 사용하면 된다 */}
			{/* {data?.map((item, index)=>(
				<div key={index}>{item.title}</div>
			))}
			<button onClick={refetch}> post 리스트 다시 불러오기 </button> */}
		</div>
	)
}

export default ReactQueryPage
