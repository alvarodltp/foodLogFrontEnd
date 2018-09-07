import React from 'react'

class SearchBar extends React.Component {
  render(){
    return(
      <div className="card">
      <h2>Search Bar</h2>
        <div className="ui input focus">
          <input onKeyDown={this.props.filterFood} type="text" placeholder="Search for foods..."/>
        </div>
      </div>
    )
  }
}

export default SearchBar
