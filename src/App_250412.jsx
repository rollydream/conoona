import React, { useState } from 'react'
import '@fontsource/gaegu'
import 'bootstrap/dist/css/bootstrap.min.css'
import './component_250412/common.css'
import CountBox from './component_250412/CountBox'
import counterStore from './stores_250412/counterStore'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'
import { Plus, Dash } from 'react-bootstrap-icons'

// 상태관리 zustand 설치
// yarn add zustand

const App_250412 = () => {
	// APP에서 관리는 state를 쓰는게 아닌
	// zustand에서 상태 관리를 하는 장소에서 가져옴
	const { count, increase, decrease, increaseBy, decreaseBy } = counterStore() // 중앙 store에서 값 가져오기
	const [inputValue, setInputValue] = useState('')
	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}
	const handleChange = (operation) => {
		// 입력값을 숫자로 변환, 숫자가 아니면 0
		const value = parseInt(inputValue, 10) || 0;
	
		if (operation === 'increase') {
			increaseBy(value);
		} else if (operation === 'decrease') {
			decreaseBy(value);
		}
	
		setInputValue(''); // 입력 후 초기화
	};
	
	const handleIncrease = () => handleChange('increase');
	const handleDecrease = () => handleChange('decrease');

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
				<Col md={6} sm={12}>
					<Card>
						<Card.Header as="h1" className="text-center">카운트 관리</Card.Header>
						<Card.Body className="text-center">
							<h2>AppCount: {count}</h2>
							
							<Button variant="success" onClick={increase} className="m-2"><Plus />증가</Button>
							<Button variant="danger" onClick={decrease} className="m-2"><Dash />감소</Button>
							
							<Form onSubmit={(e) => e.preventDefault()} className="mt-4">
								<Form.Group controlId="formInput">
									<Form.Label>사용자 입력</Form.Label>
									<Form.Control
										type="text"
										value={inputValue}
										onChange={handleInputChange}
										placeholder="값을 입력하세요"
										style={{ maxWidth: '200px', margin: '0 auto' }}
									/>
								</Form.Group>
								<Button variant="primary" type="submit" onClick={handleIncrease} className="m-2">
									<Plus /> 입력 값만큼 증가
								</Button>
								<Button variant="primary" type="submit" onClick={handleDecrease} className="m-2">
									<Dash />입력 값만큼 감소
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<CountBox />
		</Container>
	)
}

export default App_250412
