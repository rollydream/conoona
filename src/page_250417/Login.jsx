import React from 'react'
import { Container, Button, Form, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate, to}) => {
  // id랑 pw입력하면 자동 로그인되었다고 가정함
  const navigate = useNavigate()
  const loginUser = (event) =>{
    event.preventDefault() // form 기본 이벤트 막음
    console.log("login user function isuue")
    setAuthenticate(true)
    navigate('/')
  }
	return (
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {/* form 입력 받은 정보를 백앤드로 전달 
        submit 서버에 요청하면서 리프레쉬됨
      */}
      <Card style={{ width: '28rem', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} className="p-4 rounded-4">
        <Card.Body>
          <Card.Title className='fs-2 text-center'>Login</Card.Title>
          <Form onSubmit={(event)=> loginUser(event)}>
            <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control type="email" placeholder="이메일 주소" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>

            {/* 제출 전용 버튼 type=submit 그리고 보낼 때도 onSubmit={}  */}
            <div className='text-center'>
              <Button variant="danger" type="submit">
                로그인
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      
    </Container>
	)
}

export default Login
