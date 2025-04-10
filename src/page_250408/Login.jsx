import React from 'react'
import { Container, Button, Form } from 'react-bootstrap';
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
    <Container>
      {/* form 입력 받은 정보를 백앤드로 전달 
        submit 서버에 요청하면서 리프레쉬됨
      */}
      <Form onSubmit={(event)=> loginUser(event)}>
        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* 제출 전용 버튼 type=submit 그리고 보낼 때도 onSubmit={}  */}
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
	)
}

export default Login
