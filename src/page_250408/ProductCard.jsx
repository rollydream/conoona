import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

const ProductCard = ({ item }) => {

  const navigate = useNavigate();
  // id는 상품 id
  const showProduct = (id) => {
    // 동적으로 넣을 값 백틱 ` ${}`
    // 새로운 페이지로 넘어가고 싶으면 navigate
    navigate(`/product/${id}`);
  };
  return (
    <Card className="h-100 shadow-sm" style={{ cursor: "pointer" }} onClick={() => showProduct(item.id)}>
       <Card.Img
        src={item?.img}
        alt={item?.title}
				style={{ height: "200px", objectFit: "cover" }}
      />
			<Card.Body>
				<div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
				<Card.Title>
					{item?.title}
					{item?.new && (
						<Badge bg="success" style={{marginLeft:"5px", fontSize:"12px"}}>new</Badge>
					)}
				</Card.Title>
				<Card.Text>₩{item?.price}</Card.Text>
			</Card.Body>
    </Card>
  );
};

export default ProductCard;