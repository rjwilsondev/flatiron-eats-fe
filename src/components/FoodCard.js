import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FoodCard = (props) => {
  return (
    <div>
      <Card className="mx-4" border="light" style={{ width: "25rem" , height: "25rem" }}>
        <Card.Body>
          <Card.Title>{props.food.name}</Card.Title>
          <Card.Img variant="top" src={props.food.img_url} style={{width: "100%", height: "12rem", alignSelf: "center"}} />
          <Card.Text>Price: ${props.food.price}</Card.Text>
          <Card.Text>{props.food.description}</Card.Text>
          <Button onClick={(e) => props.addItem(e,props.food)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
