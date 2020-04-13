import React, { Fragment } from "react";
import FoodCard from "../components/FoodCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const FoodContainer = (props) => {
  return (
    <Fragment>
      <Container>
        <Row>{props.restaurant ? renderFoodCards(props) : null}</Row>
      </Container>
    <Button onClick={(e) => props.checkout(e)}>Checkout</Button>
    </Fragment>
  );
};

const renderFoodCards = (props) => {
  return props.restaurant.items.map((item) => {
    return <FoodCard food={item} addItem={props.addItem} key={item.id} />;
  });
};

export default FoodContainer;
