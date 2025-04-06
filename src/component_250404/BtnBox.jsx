import React from 'react'
import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
const BtnBox = ({cities, selectedCity, handleCityChange}) => {
	return (
			<>
			{/* 
				key={index} index는 추가/삭제되지 않는 고정 리스트일때만 재사용 불가
				uuid 동적으로 id값 만들어도 좋음
			*/}
			<Col xs={6} sm={4} md="auto" className="d-grid">
				<Button
					variant={selectedCity == null ? "primary" : "outline-primary"}
					className="text-capitalize"
					onClick={() => handleCityChange("current")}
					>
					Current Location
				</Button>
			</Col>
			{cities.map((city) => (
				<Col key={city} xs={6} sm={4} md="auto" className="d-grid">
					<Button
						variant={selectedCity === city ? 'primary' : 'outline-primary'}
						className="text-capitalize"
						onClick={() => handleCityChange(city)}
					>
						{city}
					</Button>
				</Col>
			))}
		</>
	)
}

export default BtnBox
