import React from 'react'
import DietDetail from './DietDetail'
import SearchBar from './SearchBar'
import FoodDetail from './FoodDetail'
import FoodList from './FoodList'
import NumbersDetail from './NumbersDetail'

class FoodContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      allFoods: [],
      searchInput: "",
      selectedFood: null, //this will be changed by click handler so I can show the food details in foodDetail. Need to somehow get the object of the selected food here.
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
  // debugger
  let selectedFoodId = parseInt(e.target.id.split("-")[1])
  let filteredFood = this.state.allFoods.find(food => food.id === selectedFoodId)
  this.setState({
    selectedFood: filteredFood
  })
}

//function that will pass to addFoodToDiet so it gets the object of the added food


changeFoodNumbers = (e) => {
  // debugger
  let servings = parseInt(e.target.value)
  let originalObj = this.state.allFoods.find(food => food.id === this.state.selectedFood.id)
  let newValue = {...originalObj}
  newValue.calories = Math.round(newValue.calories * servings * 100) / 100
  newValue.protein = Math.round(newValue.protein * servings * 100) / 100
  newValue.carbs = Math.round(newValue.carbs * servings * 100) / 100
  newValue.fats = Math.round(newValue.fats * servings * 100) / 100
  console.log(servings, newValue)
  this.setState({
    selectedFood: newValue
    // servings: servings
  })
}

addFoodToDiet = () => {
let foodObj = this.state.selectedFood
this.setState({
  addedFoods: [...this.state.addedFoods, foodObj]
})
}

  render(){
    return(
      <div className="card">
        <NumbersDetail user={this.props.user} addedFoods={this.state.addedFoods}/>
        <DietDetail addedFoods={this.state.addedFoods} selectedFood={this.state.selectedFood}/>
        <SearchBar allFoods={this.state.allFoods} filterFood={this.filterFood}/>
        <FoodList allFoods={this.state.allFoods} searchedFood={this.state.searchInput} clickHandler={this.clickHandler}/>
        {this.state.selectedFood ? <FoodDetail selectedFood={this.state.selectedFood} addFoodToDiet={this.addFoodToDiet} changeFoodNumbers={this.changeFoodNumbers} servings={this.state.servings}/> : null}
      </div>
    )
  }
}

export default FoodContainer
