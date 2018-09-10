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
      startingMacros: {}
    }
  }

componentDidMount = () => {
fetch("http://localhost:3002/users/1")
.then(response => response.json())
.then(json =>{
  // console.log(json)
  this.setState({
    user: json,
    addedFoodsToDiet: []
  })
})
}

// macrosNumbers = () =>{
//   let userObj = this.state.user
//   let macros = {}
//   macros['calories'] = userObj.calories
//   macros['protein'] = userObj.protein
//   macros['carbs'] = userObj.carbs
//   macros['fats'] = userObj.fats
//   this.setState({
//     startingMacros: macros
//   })
// }

  render(){
    return(
      <div>
        <NavBar />
        <Calendar />
        <UserDetail user={this.state.user}/>
        <FoodContainer user={this.state.user}/>
      </div>

    )
  }
}

export default App;
