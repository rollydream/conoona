import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Card className="h-100 shadow-sm" style={{ width: "18rem", cursor: "pointer" }} onClick={() => showProduct(item.id)}>
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