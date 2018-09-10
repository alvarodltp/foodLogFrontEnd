import React from 'react'

class FoodDetail extends React.Component{

  render(){

    let food = this.props.selectedFood

    return(
      <div className="ui card">
        <h1>This is the food detail</h1>
        <div id={food.id}>
          <img id="food-img" src={food.food_url} alt=""></img>
          <p>{food.name}</p>
          <p>Calories: {food.calories}</p>
          <p>Protein: {food.protein}</p>
          <p>Carbs: {food.carbs}</p>
          <p>Fats: {food.fats}</p>
          Servings: <input id="input" onChange={this.props.changeFoodNumbers} type="number" placeholder="oz" defaultValue="1"></input>
          <button onClick={this.props.addFoodToDiet} className="positive ui button">Add Food</button>
        </div>
      </div>
    )
  }
}

export default FoodDetail
