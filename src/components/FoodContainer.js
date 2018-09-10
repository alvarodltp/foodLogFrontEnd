import React from 'react'
import DietDetail from './DietDetail'
import SearchBar from './SearchBar'
import FoodDetail from './FoodDetail'
import FoodList from './FoodList'

class FoodContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      allFoods: [],
      searchInput: "",
      selectedFood: [], //this will be changed by click handler so I can show the food details in foodDetail. Need to somehow get the object of the selected food here.
      addedFoods: [],
      servings: 0
    }
  }

  componentDidMount = () => {
    fetch("http://localhost:3002/foods")
    .then(response => response.json())
    .then(json => {
      this.setState({
        allFoods: json
      })
    })
  }

  filterFood = (e) => {
    this.setState({
      searchInput: e.target.value
    })
}

clickHandler = (e) => {
  let selectedFoodId = parseInt(e.target.innerText.split(" ")[0])
  let filteredFood = this.state.allFoods.filter(food => food.id === selectedFoodId)
  this.setState({
    selectedFood: filteredFood
  })
}

addFoodToDiet = (e) => {
let addedFoodId = parseInt(e.target.parentElement.id)
let foodObj = this.state.allFoods.filter(food => food.id === addedFoodId)
this.setState({
  addedFoods: [...this.state.addedFoods, foodObj]
})
}

changeFoodNumbers = (e) => {
  // debugger
  let arr = []
  let servings = parseInt(e.target.value)
  let newValue = this.state.selectedFood[0]
  newValue.calories = newValue.calories * servings
  newValue.protein = newValue.protein * servings
  newValue.carbs = newValue.carbs * servings
  newValue.fats = newValue.fats * servings
  arr.push(newValue)
  this.setState({
    selectedFood: arr,
    servings: servings
  })
}

  render(){
    return(
      <div className="card">
        <DietDetail addedFoods={this.state.addedFoods}/>
        <SearchBar allFoods={this.state.allFoods} filterFood={this.filterFood}/>
        <FoodList allFoods={this.state.allFoods} searchedFood={this.state.searchInput} clickHandler={this.clickHandler}/>
        <FoodDetail selectedFood={this.state.selectedFood} addFoodToDiet={this.addFoodToDiet} changeFoodNumbers={this.changeFoodNumbers} servings={this.state.servings}/>
      </div>
    )
  }
}

export default FoodContainer
