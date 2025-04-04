import React from 'react'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

// Destructuring
const Box = ({weather}) => {
	
	const temp = weather ? (weather.main.temp * 1.8 + 32).toFixed(2) : '';
	return (
		<Card className="text-center" style={{ width: '20rem' }}>
			<Card.Header as="h1">Weather Info</Card.Header>
			<Card.Body>
				<Card.Subtitle className="mb-2">{weather?.name}</Card.Subtitle>
        <Card.Text>{weather?.main.temp}C / {temp}℉</Card.Text>
				<Card.Text>{weather?.weather[0].description}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Box
