import React from 'react'
import style from './RestaurantList.module.css';
import { Link, Route, Routes } from 'react-router-dom'

const RestaurantList = (props) => {
    const {item} = props;
  return (
    <Link to={`restaurants/${item.restaurantID}`} state={{item}} className={style.singleRestaurant}>
        <h3>{item.restaurantName}</h3>
        <p>{item.address}</p>
        <div className={style.dFlex}>
            <strong>{item.type}</strong>
            <strong>{item.parkingLot === true ? 'Parking Lot Available' : 'Parking not Available'}</strong>
        </div>
    </Link>
  )
}

export default RestaurantList