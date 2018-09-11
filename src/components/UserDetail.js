import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { Card, Button, Image } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class UserDetail extends React.Component {

  render() {
    return(
      <Card>
        <Card.Content>
        <Image src={this.props.user.url} alt=""/>
          <Card.Header>{this.props.user.name}</Card.Header>
              <Input onChange={this.props.handleChange} value={this.props.user.age} label="Age" type="number" name='age'/>
              <Input onChange={this.props.handleChange} value={this.props.user.weight} label="Weight" type="number" name='weight'/>
              <Input onChange={this.props.handleChange} value={this.props.user.height} label="Height" type="number" name='height'/>
              <Input onChange={this.props.handleChange} value={this.props.user.body_fat} label="Body Fat" type="number" name='body_fat'/>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick= {() => {this.props.updateUserInfo(this.props.user)}} basic color='green'>
            Update Profile
          </Button>
          <Button basic color='red'>
            Delete Profile
          </Button>
        </div>
      </Card.Content>
      </Card>

    )
  }
}

export default UserDetail
