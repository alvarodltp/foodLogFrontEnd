import React from 'react'

class NumbersDetail extends React.Component {
  render(){
    return(
      <div className="ui card">
        <h1>Calories: {this.props.userMacros.calories}</h1>
        <h3>Protein: {this.props.userMacros.protein}</h3>
        <h3>Carbs: {this.props.userMacros.carbs}</h3>
        <h3>Fats: {this.props.userMacros.fats}</h3>
      </div>

    )
  }
}

export default NumbersDetail
