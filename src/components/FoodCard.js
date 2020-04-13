import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const FoodCard = (props) => {
    return (
        <div>
            {console.log(props)}
              <Card border="light" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{props.food.name}</Card.Title>
                    <Card.Text>Price: ${props.food.price}</Card.Text>
                    <Card.Text>{props.food.description}</Card.Text>
                    <Button onClick={() => console.log("clicky click")} >Add to Cart</Button>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default FoodCard