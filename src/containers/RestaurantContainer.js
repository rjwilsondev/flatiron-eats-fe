import React, { Fragment } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';

const RestaurantContainer = (props) => {

    let filteredRestaurants =  props.restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(props.searchTerm.toLowerCase()))

    const renderRestaurants =  ()  => {
        return filteredRestaurants.map( rest => {
            return <RestaurantCard restaurant={rest}
            />
    })
}

    return (
        <Fragment>
            <Container>
                <CardColumns>
                    {renderRestaurants()}
                </CardColumns>
            </Container>
        </Fragment>
    )
}

export default RestaurantContainer