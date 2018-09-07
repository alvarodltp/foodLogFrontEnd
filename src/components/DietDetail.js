import React from 'react'

class DietDetail extends React.Component {
  render(){
    return(
    <div className="ui card">
      <h2>Log Your Daily Foods</h2>
      <h3>Breakfast</h3>
      <input type="text"/>
      <h3>Lunch</h3>
      <input type="text"/>
      <h3>Dinner</h3>
      <input type="text"/>
      <h3>Snacks</h3>
      <input type="text"/>
      <h3>Water Intake</h3>
      <label>Cups</label>
      <input type="number"/>
      <button className="ui primary button">
        Save
      </button>
      <button className="ui button">
        Edit
      </button>
    </div>
    )
  }
}

export default DietDetail
