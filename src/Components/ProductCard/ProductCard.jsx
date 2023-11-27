// import { useState } from 'react';
import Card from "react-bootstrap/Card";

function ProductCard({ data }) {
  // const [state, setState] = useState();
  console.log(data);
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={data.img} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>${data.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductCard;
