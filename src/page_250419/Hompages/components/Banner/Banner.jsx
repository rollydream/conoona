import React from 'react'
import './Banner.style.css'
import { usePopularMoviesQuery } from '../../../../hooks_240419/usePopularMovies'
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const Banner = () => {

	const { data, isLoading, isError, error } = usePopularMoviesQuery()

	console.log('data', data)
	
	if (isLoading){
		<div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          position: "absolute", 
          top: 0, 
          left: 0,
          right: 0, 
          bottom: 0, 
        }}
      >
			<Spinner/>
		</div>
	}
	if (isError) {
		<Alert variant="danger">
			<Alert.Heading>에러!</Alert.Heading>
			<p>{error.message}</p>
		</Alert>
	}

	return (
		<div
			className="banner text-white d-flex align-items-center"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path})`,
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-5 banner-text-area">
						<h1>{data?.results[0].title}</h1>
						<p>{data?.results[0].overview}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
