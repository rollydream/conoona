import React from 'react'
import './AppLayout.style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
	return (
		<div >
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="/" ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lXFawj36xIknKIL0mXsAq7STOMFVIQi8Gg&s'style={{ width: '100px'}}/></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="/" className='text-white'>Home</Nav.Link>
							<Nav.Link href="/movies" className='text-white'>Moives</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="danger">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* 라우터 안에 있는 자손들을 가져옴 */}
			<Outlet />
		</div>
	)
}

export default AppLayout
