import React from 'react'

class UserDetail extends React.Component {

  render() {
    return(

      <div className="ui card">
        <img className="ui small circular image" src={this.props.user.url} alt=""></img>
        <h1>Name: {this.props.user.name}</h1>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Weight: {this.props.user.weight}</h3>
        <h3>Height: {this.props.user.height}</h3>
        <h3>Body Fat: {this.props.user.body_fat}</h3>
      </div>

    )
  }
}

export default UserDetail
