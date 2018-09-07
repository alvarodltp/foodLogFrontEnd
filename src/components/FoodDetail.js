import React from 'react'

class FoodDetail extends React.Component {
  render(){
    return(
      <div className="card">
        <div className="ui input focus">
          <input type="text" placeholder="Search for foods..."/>
        </div>
      </div>
    )
  }
}

export default FoodDetail
