import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Card, Button, Image, Container } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class UserDetail extends React.Component {

  render() {
    return(


        <Grid columns={3}>
        <Grid.Row>
          <h2>Welcome, {this.props.user.name}. Here are your current stats!</h2>
        </Grid.Row>
        <Grid.Column>
          <img style={{height: "100px", margin: "0 auto"}} src={this.props.user.url} />
        </Grid.Column>
        <Grid.Column>
              <Input onChange={this.props.handleChange} value={this.props.user.age} label="Age" type="number" name='age'/>
              <br />
              <br />
              <Input onChange={this.props.handleChange} value={this.props.user.weight} label="Weight" type="number" name='weight'/>
              <br />
              <br />
        </Grid.Column>

        <Grid.Column>
              <Input onChange={this.props.handleChange} value={this.props.user.height} label="Height" type="number" name='height'/>
              <br />
              <br />
              <Input onChange={this.props.handleChange} value={this.props.user.body_fat} label="Body Fat" type="number" name='body_fat'/>
        </Grid.Column>

        <div className='ui two buttons'>
          <Button onClick= {() => {this.props.updateUserInfo(this.props.user)}} basic color='green'>
            Update Profile
          </Button>
        </div>
      </Grid>



    )
  }
}

export default UserDetail
