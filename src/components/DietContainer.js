import React from 'react'
import DietDetail from './DietDetail'
import FoodDetail from './FoodDetail'

class DietContainer extends React.Component {
  render(){
    return(
      <div className="card">
        <DietDetail />
        <FoodDetail />
      </div>
    )
  }
}

export default DietContainer
