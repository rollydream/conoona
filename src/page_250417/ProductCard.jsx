import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ item }) => {
  const coverImg = item.cover_i
    ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
    : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MTBfMTY1%2FMDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute%2Fuser.png&type=sc960_832";

  const author = item.author_name ? item.author_name.join(", ") : "저자 미상";

  return (
    <Card className="h-100 shadow-sm cardBox" style={{ cursor: "pointer" }}>
      <Card.Img
        src={coverImg}
        alt={item.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "16px" }}>{item.title}</Card.Title>
        <Card.Text style={{ fontSize: "14px", color: "#666" }}>
          {author}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;