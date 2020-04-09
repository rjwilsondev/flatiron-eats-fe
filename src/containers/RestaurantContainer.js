import React from 'react';
import RestaurantCard from '../components/RestaurantCard'

const RestaurantContainer = (props) => {
    return (
        <div className="restaurant-container">
            {props.restaurants.map( rest => {
                return <RestaurantCard
                />
            } )}
        </div>
    )
}

export default RestaurantContainer