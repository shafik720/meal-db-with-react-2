import React, { useEffect, useState } from 'react';
import { addToStorage , getStoredCart } from '../../utilities/storage';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Body.css'

const Body = () => {

    // getting data from api
    const[meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[]);

    //----------------------------------- adding to local Storage
    let [cart, setCart] = useState([]);
    function addToBucket(element){
        let newCart = [];
        addToStorage(element.idMeal);
        newCart.push(element);
        setCart(newCart);
    }

    //----------------------------------- getting from local storage
    let [food, setFood] = useState([]);
    useEffect(()=>{
        let storedCart = getStoredCart();
        let freschCart = [];
        for(let  id in storedCart){
            let addedFood = meals.find(index=> index.idMeal === id);
            if(addedFood){
                addedFood.quantity = storedCart[id];
                freschCart.push(addedFood);
            }          
            setFood(freschCart);
        }
    },[meals, cart])    
    

    return (
        <div className="body-div">
            <div className="left-side">
                {
                    meals.map(index=><Meal
                        index={index}
                        key = {index.idMeal}
                        addToBucket = {addToBucket}
                    ></Meal>)
                }
            </div>
            <div className="right-side">
                {
                    food.map(index=><Cart
                        index = {index}
                        key = {index.idMeal}
                        addToBucket ={addToBucket}
                    ></Cart>)
                }
            </div>           
        </div>
    );
};

export default Body;