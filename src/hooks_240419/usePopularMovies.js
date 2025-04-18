import { useQuery } from "@tanstack/react-query";
import api from "../utiles_250419/api";

// baseurl을 만들어 놓았기 떄문에 뒤에꺼 불러오면 됨 endpoint만 가져오면됨
const fetchPopularMovies = () => {
  //return api.get(`/movie/popular`).then(res => res.data.results); // 바로 results만 리턴
	return api.get(`/movie/popular`)
}

export const usePopularMoviesQuery=()=>{
	return useQuery({
		queryKey:['movie-popular'],
		queryFn: fetchPopularMovies,
		select:(result)=>result.data
	})
}