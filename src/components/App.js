import React from 'react';
// import { Route, Switch } from "react-router-dom";

import '../App.css';
import NavBar from './NavBar.js';
import FoodContainer from './FoodContainer'
import UserDetail from './UserDetail'
import Calendar from './Calendar'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: [],
      userMacros: null
    }
  }

componentDidMount = () =>{
fetch("http://localhost:3002/users/1")
.then(response => response.json())
.then(json =>{
  console.log(json)
  this.setState({
    user: json,
    addedFoodsToDiet: []
  }, () => this.setInitialUserMacros()
)
})
}

setInitialUserMacros = () => {
  let user = {...this.state.user}
  let macros = {}
  macros['calories'] = user.calories
  macros['protein'] = user.protein
  macros['carbs'] = user.carbs
  macros['fats'] = user.fats
  this.setState({
    userMacros: macros
  })
}

updateUserMacros = (selectedFoodMacros) => {
  let userMacros = {...this.state.userMacros}
  userMacros['calories'] = Math.round((userMacros.calories - selectedFoodMacros.calories) * 100) / 100
  userMacros['carbs'] = Math.round((userMacros.carbs - selectedFoodMacros.carbs) * 100) / 100
  userMacros['protein'] = Math.round((userMacros.protein - selectedFoodMacros.protein) * 100) / 100
  userMacros['fats'] = Math.round((userMacros.fats - selectedFoodMacros.fats) * 100) / 100
  this.setState({
    userMacros: userMacros
  })
}

  render(){
    return(
      <div>
        <NavBar title="Coffee"
          icon="coffee"
          color="yellow"
          subtitle="Your daily food tracker"
          />
        <Calendar />
        <UserDetail user={this.state.user}/>
        <FoodContainer user={this.state.user} userMacros={this.state.userMacros} updateUserMacros={this.updateUserMacros}/>
      </div>

    )
  }
}

export default App;
