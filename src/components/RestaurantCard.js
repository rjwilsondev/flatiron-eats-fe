import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const RestaurantCard = (props) => {
  return (
    <div>
      <Card className="mx-5" style={{ width: "18rem", height: "25rem"}}>
        <Card.Body>
        <Card.Img variant="top" src={props.restaurant.img_url} style={{width: "100%", height: "12rem", alignSelf: "center"}} />
          <Card.Title>{props.restaurant.name}</Card.Title>
            <div>Location: {props.restaurant.location}</div>
            <div>Price point: {dollarSigns(props.restaurant.price_point)}</div>
          <Button
            variant="primary"
            href={`http://localhost:3001/restaurant/${props.restaurant.id}`}
          >
            Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const dollarSigns = (count) => {
  let dollars = [];
  for (let i=0;i<count;i++) {
    dollars.push(<FontAwesomeIcon icon={faDollarSign} />)
  }
  return dollars
}

export default RestaurantCard;
