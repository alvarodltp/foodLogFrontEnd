import React from 'react';
import '../App.css';
import NavBar from './NavBar.js';
import DietContainer from './DietContainer'
import UserDetail from './UserDetail'
import NumbersDetail from './NumbersDetail'
import Calendar from './Calendar'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: []
    }
  }

componentDidMount = () => {
fetch("http://localhost:3002/users/2")
.then(response => response.json())
.then(json =>{
  this.setState({
    user: json
  })
})
}


  render(){
    return(
      <div>
        <NavBar />
        <Calendar />
        <UserDetail user={this.state.user}/>
        <NumbersDetail user={this.state.user}/>
        <DietContainer />
      </div>
    )
  }
}

export default App;
