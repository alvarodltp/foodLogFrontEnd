import React from 'react'


const FoodList = (props) => {
  // debugger
      if(props.searchedFood === "") {
        return <p></p>
      } else {
        let filteredFoods = props.allFoods.filter(food => food.name.toLowerCase().includes(props.searchedFood.toLowerCase())
      );
      return filteredFoods.map(food => (
        <p id={`food-${food.id}`} onClick={props.clickHandler}> {food.name}</p>
      ))
    }
}


export default FoodList
