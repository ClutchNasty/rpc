import React, {Component} from 'react';
import './App.css'
import {Button, Container, Header} from "semantic-ui-react"
import { styles } from 'ansi-colors';

class App extends Component {

  // state = {
  //   rpc: [
  //     {id: 1, name: "rock", },
  //     {id: 2, name: "scissors",},
  //     {id: 3, name: "paper",},
  //   ]

  render = () => {
return(
 
 
  <Container style={styles.container} textAlign="center">
    <Header as="h1"> Rock, Paper, Scissors!! </Header>

      <Button size="" onClick="rock">Rock
      </Button >

      <Button onClick="Paper">Paper
      </Button >

      <Button onClick="Scissors">Scissors
      </Button >

  </Container>
   )
  }

  }

  




export default App
