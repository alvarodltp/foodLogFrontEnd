import React from 'react'

class FoodDetail extends React.Component{
  render(){
    return(
      <div className="ui card">
        <h1>This is the food detail</h1>
        {this.props.selectedFood.map(food =>
        <div>
          <p>{food.name}</p>
          <p>Calories: {food.calories}</p>
          <p>Protein: {food.protein}</p>
          <p>Carbs: {food.carbs}</p>
          <p>Fats: {food.fats}</p>
        </div>
      )}

        <button className="positive ui button">Add Food</button>
      </div>

    )
  }
}

export default FoodDetail
