import React from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {
    return (
        <div className="body-div">
            <div className="left-side">
                <Meal></Meal>
            </div>
            <div className="right-side">
                <Cart></Cart>
            </div>           
        </div>
    );
};

export default Body;