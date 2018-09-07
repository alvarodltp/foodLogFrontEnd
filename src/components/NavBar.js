
import React from 'react'

class NavBar extends React.Component{
  render(){
    return(
      <div className="ui menu">
        <div className="item">
        <div className="ui primary button">Sign up</div>
      </div>
      <div className="item">
        <div className="ui button">Log-in</div>
        </div>
      </div>
    )
  }
}

export default NavBar
