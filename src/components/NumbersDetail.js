import React from 'react'

class NumbersDetail extends React.Component {
  render(){
    return(
      <div className="ui card">
        <h2>Calories: {this.props.userMacros.calories}</h2>
        <p>Protein: {this.props.userMacros.protein}</p>
        <p>Carbs: {this.props.userMacros.carbs}</p>
        <p>Fats: {this.props.userMacros.fats}</p>
      </div>

    )
  }
}

export default NumbersDetail
