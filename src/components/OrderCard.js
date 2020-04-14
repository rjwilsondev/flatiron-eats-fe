import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const OrderCard = (props) => {
    return (
    <div>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.order.restaurant_name}</Card.Title>
          <Card.Text>Total Cost: ${props.order.total_cost}</Card.Text>
              Number of items: {props.order.items.length}
              <ul>
                  {props.order.items.map (item => 
                    <li>
                        {item.name}: price:  ${item.price}
                    </li>)}
              </ul>
          {/* <Button onClick={(e) => props.addItem(e,props.food)}>Add to Cart</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;