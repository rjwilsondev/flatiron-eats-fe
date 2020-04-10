import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RestaurantCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.restaurant.img_url} />
            <Card.Body>
            <Card.Title>{props.restaurant.name}</Card.Title>
            <Card.Text>
                <div>Location: {props.restaurant.location}</div>
                <div>Price point: {props.restaurant.price_point}</div>   
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default RestaurantCard