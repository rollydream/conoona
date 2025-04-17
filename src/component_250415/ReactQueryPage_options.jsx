import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

// axios 설치
// yarn add axios
const ReactQueryPage = () => {
	
	const fetchPost = (queryData) =>{
		const id = queryData.queryKey[1]
		return axios.get(`http://localhost:5000/posts/${id}`)
	}
	// react-query는 data만을 위한게 아님 서버 state를 겨냥해서 나온 것이다
	// ex) Loading , data, error

	// error : 원래 호출 + 기본 재시도 3번 호출 횟수 지정 정하기 (ex_ retry:1로 하면됨)
	
	// select : 선택해서 데이터 뽑아옴 ()
	const {isLoading , data, isError, error, refetch} = useQuery({
		// 가져올 api이름 / 보내주고 싶은 값을 넣어 줄수 있음
		queryKey:['posts',1],
		// 무슨 API 호출 할지
		queryFn:fetchPost,
		retry:1,
		//staleTime: 5000, // 자주 호출 할 필요가 없는 경우에 사용 함
		select:(data)=>{ // 선택해서 데이터 뽑아옴 성공을 하고 와서 리턴을 하기 전에 select로 와서 내가 무슨 데이터만 선택해서 보내줄지 select와서 리턴해줌 
			return data.data
		},
		// garbage collect time
		// gcTime 동안 캐시를 유지하다가 그 시간이 지나면 데이터를 완전히 제거
		// 너무 짧게 설정하면 성능이 좋을 수도 있지만, 자주 refetch 될 수 있음
		// 쿼리가 더 이상 필요 없을 때 5분 뒤에 캐시 제거
		gcTime : 5000, // 5분
		// API 통제하는 것이 중요한 이유! 
		// 서버에 부하
		// staleTime보다 gcTime이 짧으면 어떻게 되나 ?
		
		// refetchOnMount : false,// 기본값 true

		// user는 항상 최신 데이터를 볼 수 있음
		// refetchOnWindowFocus : true,
		// 데이터 호출 
		enabled : false // true,false외에 조건을 달아서 api를 호출할 수 있다.
	})

	console.log( 'React-Query ', data , isLoading, )
	console.log('error', isError , error)

	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <div>{error.message}</div>
	}

	return (
		<div>
			{/* data.data >> 말구 data로 사용하고 싶으면 select 옵션을 사용하면 된다 */}
			{/* {data?.map((item, index)=>(
				<div key={index}>{item.title}</div>
			))} */}
			<button onClick={refetch}> post 리스트 다시 불러오기 </button>
		</div>
	)
}

export default ReactQueryPage
