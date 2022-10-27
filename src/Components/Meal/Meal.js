import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props.index);
    const {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index;
    return (
        <div className="food-card">
            <div className="card-img">
                <img src={strMealThumb} alt=""/>
            </div>
            <div className="card-body">
                <div className="body-left">
                    <h3>{strMeal}</h3>
                    <button>Order</button>
                </div>
                <div className="body-right">
                    <p>{strCategory}</p>
                    <p>{strArea}</p>
                </div>
            </div>
        </div>
    );
};

export default Meal;