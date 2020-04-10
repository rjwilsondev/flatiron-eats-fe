import React, { Fragment } from 'react';
import FoodCard from '../components/FoodCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const FoodContainer = (props) => {
    
    return (
        <Fragment>
            <Container>
                <Row>
                    {props.restaurant ? renderFoodCards(props) : null}
                </Row>
            </Container>
        </Fragment>
    )
}

const renderFoodCards = (props) => {
    return props.restaurant.items.map( item => {
        return <FoodCard Food={item}/>
    })}


export default FoodContainer