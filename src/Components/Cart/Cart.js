import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {idMeal, strMeal, strMealThumb, quantity} = props.index;
    return (
        <div className="cardx">
            <div className="card-left">
                <div className="card-left-img">
                    <img src={strMealThumb} alt=""/>
                </div>
                <div className="card-left-details">
                    <h3>Name : {strMeal} </h3>
                    <p>Quantity : {quantity} </p>
                </div>
            </div>
            <div className="card-right"></div>
        </div>
    );
};

export default Cart;