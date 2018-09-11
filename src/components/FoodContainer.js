import React from 'react'
import DietDetail from './DietDetail'
import SearchBar from './SearchBar'
import FoodDetail from './FoodDetail'
import FoodList from './FoodList'
import NumbersDetail from './NumbersDetail'
import { Grid } from 'semantic-ui-react'

let counter = 0

class FoodContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      allFoods: [],
      searchInput: "",
      selectedFood: null, //this will be changed by click handler so I can show the food details in foodDetail. Need to somehow get the object of the selected food here.
      addedFoods: [],
      servings: 0,
      userMacros: null
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
  let servings = parseInt(e.target.value)
  let originalObj = this.state.allFoods.find(food => food.id === this.state.selectedFood.id)
  let newValue = {...originalObj}
  newValue.calories = Math.round(newValue.calories * servings * 100) / 100
  newValue.protein = Math.round(newValue.protein * servings * 100) / 100
  newValue.carbs = Math.round(newValue.carbs * servings * 100) / 100
  newValue.fats = Math.round(newValue.fats * servings * 100) / 100
  this.setState({
    selectedFood: newValue
    // servings: servings
  })
}

addFoodToDiet = () => {
let foodObj = {...this.state.selectedFood}
foodObj.listId = ++counter
this.setState({
  addedFoods: [...this.state.addedFoods, foodObj]
})
}

deleteFood = (e, id) => {
  let foodArr = [...this.state.addedFoods]
  let filteredArr = foodArr.filter(food => food.listId !== id)
  console.log(filteredArr);
  this.setState({
    addedFoods: filteredArr
  })
}

  render(){
    return(
      <Grid columns='equal'>
      <Grid.Row>
      <Grid.Column>
        <SearchBar allFoods={this.state.allFoods} filterFood={this.filterFood}/>
        <FoodList allFoods={this.state.allFoods} searchedFood={this.state.searchInput} clickHandler={this.clickHandler}/>
      </Grid.Column>
      <Grid.Column>
        {this.props.userMacros ? <NumbersDetail user={this.props.user} addedFoods={this.state.addedFoods} userMacros={this.props.userMacros}/> : null}
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column>
      {this.state.selectedFood ? <FoodDetail updateUserMacros={this.props.updateUserMacros} selectedFood={this.state.selectedFood} addFoodToDiet={this.addFoodToDiet} changeFoodNumbers={this.changeFoodNumbers} servings={this.state.servings}/> : null}
      </Grid.Column>
      <Grid.Column>
      <DietDetail addedFoods={this.state.addedFoods} selectedFood={this.state.selectedFood} deleteFood={this.deleteFood}/>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    )
  }
}

export default FoodContainer
