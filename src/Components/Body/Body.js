import React from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {
    return (
        <div className="body-div">
            <Meal></Meal>
            <Cart></Cart>
        </div>
    );
};

export default Body;