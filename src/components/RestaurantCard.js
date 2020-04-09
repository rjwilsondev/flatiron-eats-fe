import React from 'react';

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            Name {props.restaurant.name}
            Location {props.restaurant.location}
            Price point {props.restaurant.price_point}
            <img src={props.restaurant.img_url}/>
        </div>
    )
}

export default RestaurantCard