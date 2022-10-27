import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {

    const[meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    return (
        <div className="body-div">
            <div className="left-side">
                {
                    meals.map(index=><Meal
                        index={index}
                        key = {index.idMeal}
                    ></Meal>)
                }
            </div>
            <div className="right-side">
                <Cart></Cart>
            </div>           
        </div>
    );
};

export default Body;