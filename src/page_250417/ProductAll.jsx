import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Row, Col, Container, Alert ,Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      let keyword = query.get("q") || "love";
      let url = `https://openlibrary.org/search.json?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      
      if (data.docs.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("책 목록이 없습니다.");
        }
      } else {
        setError(""); // 에러 초기화
      }

      setProducts(data.docs);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {loading ? (
        <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          position: "absolute", 
          top: 0, 
          left: 0,
          right: 0, 
          bottom: 0, 
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        
        <Row className="g-4">
          <h1>사랑 도서</h1>
          {products.length > 0 &&
            products.map((item) => (
              <Col lg={3} key={item.key}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
