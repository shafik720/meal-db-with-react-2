import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props.index);
    const {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index;
    return (
        <div>
            <div className="card-img">
                <img src={strMealThumb} alt=""/>
            </div>
        </div>
    );
};

export default Meal;