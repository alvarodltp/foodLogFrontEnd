import React from 'react';
// import { Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { Divider, Form, Label } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
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
fetch("http://localhost:3002/users/2")
.then(response => response.json())
.then(json =>{
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

handleChange = (e) => {
  let user = {...this.state.user}
  let attr = e.target.name
  user[attr] = e.target.value
  this.setState({
    user: user
  })
}

substractFoodNumbers = (foodObj) => {
  let userMacros = {...this.state.userMacros}
  // debugger
  userMacros['calories'] = userMacros.calories + foodObj.calories
  userMacros['protein'] = userMacros.protein + foodObj.protein
  userMacros['carbs'] = userMacros.carbs + foodObj.carbs
  userMacros['fats'] = userMacros.fats + foodObj.fats
  this.setState({
    userMacros: userMacros
  })
}

  updateUserInfo = (user) => {
  let id = user.id
  fetch(`http://localhost:3002/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          age: user.age,
          height: user.height,
          weight: user.weight,
          body_fat: user.body_fat
        }
      })
    });
  }

  render(){
    return(
      <div>
        <NavBar title="Coffee"
          icon="coffee"
          color="yellow"
          subtitle="Your daily food tracker"
          />
      <Container>
        <Grid columns='equal'>
        <Grid.Row>
        <Grid.Column>
          <UserDetail user={this.state.user} updateUserInfo={this.updateUserInfo} handleChange={this.handleChange}/>
        </Grid.Column>
        <Grid.Column>
          <Calendar />
        </Grid.Column>
          <FoodContainer substractFoodNumbers={this.substractFoodNumbers} user={this.state.user} userMacros={this.state.userMacros} updateUserMacros={this.updateUserMacros}/>
        </Grid.Row>
        </Grid>
      </Container>
      </div>

    )
  }
}

export default App;
