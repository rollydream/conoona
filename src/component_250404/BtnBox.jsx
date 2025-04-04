import React from 'react'
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
const BtnBox = () => {
	return (
		<ButtonGroup className='col-auto mt-3'>
			<Button variant="primary">Current Location</Button>
			<Button variant="primary">Paris</Button>
			<Button variant="primary">New yourk</Button>
		</ButtonGroup>
	)
}

export default BtnBox
