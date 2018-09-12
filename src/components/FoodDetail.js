import React from 'react'

class FoodDetail extends React.Component{

  render(){

    let food = this.props.selectedFood

    return(
      <div id="food-card" className="ui card">
        <div id={food.id}>
          <img id="food-img" src={food.food_url} alt=""></img>
          <h2>{food.name}</h2>
          <h4>Calories: {food.calories}</h4>
          <h4>Protein: {food.protein}</h4>
          <h4>Carbs: {food.carbs}</h4>
          <h4>Fats: {food.fats}</h4>
          Servings: <input id="input" onChange={this.props.changeFoodNumbers} type="number" placeholder="oz" defaultValue="1"></input>
          <br />
          <br />
          <button onClick={() => {this.props.addFoodToDiet(); this.props.updateUserMacros(food);}} className="positive ui button">Add Food</button>
          <br />
          <br />
        </div>
      </div>

    )
  }
}

export default FoodDetail
