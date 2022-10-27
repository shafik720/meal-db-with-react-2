import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
                    <p>Quantity : <span className="quantity">{quantity}</span> </p>
                </div>
            </div>
            <div className="card-right">
                <span onClick={()=>props.addToBucket(props.index)} draggable><FontAwesomeIcon icon={faPlus} /></span>
                <span  draggable><FontAwesomeIcon icon={faMinus} /></span>
            </div>
        </div>
    );
};

export default Cart;