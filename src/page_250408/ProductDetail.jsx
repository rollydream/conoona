import React,{useEffect, useState} from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
	const getProductDetail= async () => {
		let url = `https://my-json-server.typicode.com/rollydream/conoona/products/${id}`
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
	}
	useEffect(()=>{
		getProductDetail()
	},[])

	return (
		<Container>
			<Row>
				<Col xs={12} md={6}>
					<img src={product?.img} className="w-100 h-auto"/>
				</Col>
				<Col xs={12} md={4}>
					<div className='fs-2 fw-bold'>{product?.title}</div>
					<div className="fs-3">{product?.price}</div>
					<Dropdown className="drop-down">
						<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
							사이즈 선택
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{product?.size.length > 0 &&
								product.size.map((item) => (
									<Dropdown.Item key={item} href="#/action-1">{item}</Dropdown.Item>
								))}
						</Dropdown.Menu>
					</Dropdown>
					<Button variant="danger" className="add-button">
						추가
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductDetail
