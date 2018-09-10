import React from 'react'

class DietDetail extends React.Component {
  render(){
    return(
    <div className="ui card">
      <h2>Diet Detail</h2>
      {this.props.addedFoods.map(foodObj => foodObj.map(food =>
      <div>
        <ul>
          <li>{food.name}: Calories: {food.calories} | Protein: {food.protein}g | Carbs: {food.carbs}g | Fats: {food.fats}g</li>
        </ul>
      </div>
    ))}
      <label>Water</label>
      <input type="number"/>
      <button className="ui primary button">
        Save
      </button>
    </div>
    )
  }
}

export default DietDetail
