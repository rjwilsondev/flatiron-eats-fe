import React, { Fragment } from 'react';
import FoodCard from '../components/FoodCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const foodContainer = (props) => {
    
    return (
        <Fragment>
            <Container>
                <Row>
                    {props.restaurant.items.map( item => {
                        return <FoodCard Food={item}
                        />
                    } )}
                </Row>
            </Container>
        </Fragment>
    )
}

export default foodContainer