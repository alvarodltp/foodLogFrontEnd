import React from 'react'

class NumbersDetail extends React.Component {
  render(){
    return(
      <div className="ui card">
        
        <h1>Calories: {this.props.user.calories}</h1>
        <h3>Protein: {this.props.user.protein}</h3>
        <h3>Carbs: {this.props.user.carbs}</h3>
        <h3>Fats: {this.props.user.fats}</h3>
      </div>

    )
  }
}

export default NumbersDetail
