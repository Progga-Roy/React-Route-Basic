// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const Restaurant = () => {
//     const [searchText, setSearchText] =useState('')
//     const [meals,setMeals]= useState([]);
//    useEffect(()=>{
//        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s${searchText}`
//        fetch(url)
//        .then(res=> res.json())
//        .then(data=> setMeals(data.meals))
//    },[searchText])
//     const searchFood = e =>{
//         setSearchText(e.target.value)
//     }
//     return (
//         <div>
//             <h2>Search your favorite food...</h2>
//             <input onChange={searchFood} type="text" placeholder='Search..'/>
//             <br />
//             <h3>Total food items: {meals.length}</h3>
//             {
//                 meals.map(meal => <Link to={`/foods/${meal.strMeal}`}>{meal.meals.strMeal}</Link>)
//             }
//         </div>
//     );
// };

// export default Restaurant;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Restaurant = () => {
    const [searchText, setSearchText] =useState('')
        const [meals,setMeals]= useState([]);
       useEffect(()=>{
           const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
           fetch(url)
           .then(res=> res.json())
           .then(data=> setMeals(data.meals))
       },[searchText])
        const searchFood = e =>{
            setSearchText(e.target.value)
        }
    return (
        <div>
             <h2>Search your favorite food...</h2>
             <input onChange={searchFood} type="text" placeholder='Search..'/>
            <br />
            <h3>Total food items: {meals.length}</h3>
           {
             meals.map(meal => <li><Link to={`/foods/${meal.strMeal}`}>{meal.strMeal}</Link></li>)
           
           }
        </div>
    );
};

export default Restaurant;
