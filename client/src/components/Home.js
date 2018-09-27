import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = {users: []}
  componentDidMount() {
    axios.get('/api/user')
    .then(res => this.setState({ users: res.data}) )
  }
  render() {
    const { users } = this.state
    return (
      <div>
      <Header as='h1' textAlign='center'>Home Component</Header>
      <List divided relaxed>
      { users.map( user => 
        <list.Item key={user.id}>
          <List.Content>
            <List.Header>{user.email}</List.Header>
          </List.Content>
        </list.Item>
        )
      }
        </List>
      </div>
    );
  }
}

export default Home;
