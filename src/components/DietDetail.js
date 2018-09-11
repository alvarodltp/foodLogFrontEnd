import React from 'react'
import { Icon } from 'semantic-ui-react'

class DietDetail extends React.Component {
  render(){
    return(
    <div className="ui card">
      <h2>Diet Detail</h2>
      {this.props.addedFoods.map(food =>
      <div>
        <ul>
          <li>{food.name}: Calories: {food.calories} | Protein: {food.protein}g | Carbs: {food.carbs}g | Fats: {food.fats}g <Icon onClick={(e) => {this.props.deleteFood(e, food.listId); this.props.substractFoodNumbers(food);}} name='delete' /></li>
        </ul>
      </div>
    )}
      <label id="water-text">Cups of Water</label>
      <input type="number"/>
      <button className="ui primary button">
        Save
      </button>
    </div>
    )
  }
}

export default DietDetail
