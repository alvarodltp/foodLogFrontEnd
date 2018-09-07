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
      searchInput: ""

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

  render(){
    return(
      <div className="card">
        <DietDetail />
        <SearchBar allFoods={this.state.allFoods} filterFood={this.filterFood}/>
        <FoodList allFoods={this.state.allFoods} searchedFood={this.state.searchInput}/>
        <FoodDetail />
      </div>
    )
  }
}

export default FoodContainer
