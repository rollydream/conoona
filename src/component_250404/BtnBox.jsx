import React from 'react'
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
const BtnBox = ({cities, setCity, selectedCity}) => {
	console.log("cities",cities)

	return (
			<>
			{/* 
				key={index} index는 추가/삭제되지 않는 고정 리스트일때만 재사용 불가
				uuid 동적으로 id값 만들어도 좋음
			*/}
			{cities.map((item) => (
				<Col key={item} xs={6} sm={4} md="auto" className="d-grid">
					<Button
						variant={selectedCity === item ? 'primary' : 'outline-primary'}
						className="text-capitalize"
						onClick={() => setCity(item)}
					>
						{item}
					</Button>
				</Col>
			))}
		</>
	)
}

export default BtnBox
