import React from 'react'

const FoodList = (props) => {
      if(props.searchedFood === "") {
        return <p></p>
      } else {
        let filteredFoods = props.allFoods.filter(food => food.name.toLowerCase().includes(props.searchedFood.toLowerCase())
      );
      return filteredFoods.map(food => (
        <p>{food.name}</p>
      ))

      }

}

export default FoodList
