import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPost = (postId) =>{
	//const id = queryData.queryKey[1]
	return axios.get(`http://localhost:5000/posts/${postId}`)
}

export const usePostQuery = (postId) =>{
	return useQuery({
		queryKey: ["posts", postId],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
		queryFn: ()=> fetchPost(postId), // 여기에서 줌 
		retry :1,
		select: (data) =>{
			return data.data
		}
	})
}
