import React from 'react'
import { connect } from 'react-redux'
import { setFlash } from '../reducers/flash'
import { addMessage } from '../reducers/messages'
import { Segment, Header, Form, TextArea, Button} from 'semantic-ui-react'
//import ChatMessage from './ChatMessage'
import styled from 'styled-components'

const MainWindow = styled(Segment)`
  border: 3px solid black;
  height: 60vh;
  overflow=y: scrool;
  background-color: lightgray;
  border-radius: 10px;
  `

const MessageInput = styled(Segment)`
border-radius: 10px;
width: 80%;
margin: 0 auto;
padding 10px;
`



const Underline = styled(Header)`
text-decoration: underline;
`


class ChatWindow extends React.Component {
  state = {message: ''}
  displayMessages = () =>{

  } 

  setMessage = (e) => {

  }

  addMessage = (e) => {

  }
    render(){
    return(
      <Segment basic>
      <Underline as="h2" textAlign="center">
      React Chat!
      </Underline>
      <MainWindow basic>
        {this.displayMessages() }
      </MainWindow>
      <MessageInput>
        <Form onSubmit={this.addMessage}>
        <TextArea
        value={this.state.message}
        onChange={this.setMessage}
        placeholder="Say Something"
        auotFocus
        required
        >
        </TextArea>
        <Segment basic textAlign="center">
        <Button primary> Send Message</Button>
        </Segment>
        </Form>
      </MessageInput>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
  }
}

export default connect (mapStateToProps) (ChatWindow)