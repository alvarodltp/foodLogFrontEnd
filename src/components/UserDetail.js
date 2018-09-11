import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { Card, Button, Image } from 'semantic-ui-react'

class UserDetail extends React.Component {

  render() {
    return(
      <Card>
        <Card.Content>
          <Image floated='right' size='mini' src={this.props.user.url} alt=""/>
          <Card.Header>{this.props.user.name}</Card.Header>
            <Card.Description>
              <Card.Content>Age: {this.props.user.age}</Card.Content>
              <Card.Content>Weight: {this.props.user.weight}</Card.Content>
              <Card.Content>Height: {this.props.user.height}</Card.Content>
              <Card.Content>Body Fat: {this.props.user.body_fat}</Card.Content>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Update Stats
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
