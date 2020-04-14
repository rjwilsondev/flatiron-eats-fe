import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OrderCard = (props) => {
    return (
    <div>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.order.restaurant_id}</Card.Title>
          <Card.Text>Price: ${props.order.restaurant_id}</Card.Text>
          <Card.Text>{props.order.restaurant_id}</Card.Text>
          {/* <Button onClick={(e) => props.addItem(e,props.food)}>Add to Cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;