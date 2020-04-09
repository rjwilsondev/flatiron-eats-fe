import React, { Fragment } from 'react';
import RestaurantCard from '../components/RestaurantCard'

const RestaurantContainer = (props) => {
    return (
        <Fragment>
            <div className="restaurant-container">
                {props.restaurants.map( rest => {
                    return <RestaurantCard
                    />
                } )}
            </div>
        </Fragment>
    )
}

export default RestaurantContainer