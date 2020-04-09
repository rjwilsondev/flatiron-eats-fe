import React, { Fragment } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RestaurantContainer = (props) => {
    return (
        <Fragment>
            <Container>
                <Row>
                    {props.restaurants.map( rest => {
                        return <RestaurantCard restaurant={rest}
                        />
                    } )}
                </Row>
            </Container>
        </Fragment>
    )
}

export default RestaurantContainer