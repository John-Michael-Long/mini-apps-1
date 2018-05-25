/*
[X] - Use ReactJS for all views and bundle with Webpack
[X] - Use Express to serve your app and handle API requests
[] - Implement all the game logic in the client code
[] - you must detect a win or tie and display an appropriate message. 
[] - Refreshing the page should restart the game. 
[] - Write at least four tests (one test for each of horizontal, vertical, diagonal wins and one for ties) to verify your end-of-game detection logic. 
[] - You may choose to write your tests to run either with node or within the browser.
[] - Minimal CSS 
*/
import React from 'react';
import {RenderRow} from './Board.jsx'

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardConfig: [[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]],
      selectedColumn: 0,
      playerTurn: 'X'
    }
  }

  copyArray(){
    return this.state.boardConfig.map( (row) => row.slice() )
  }

  handleSquareClick(event){
    let x = parseInt(event.target.getAttribute('x'))
    let y = parseInt(event.target.getAttribute('y'))

    let copyArr = this.copyArray();
    copyArr[y][x] = this.state.playerTurn;

    console.log('X', x,'Y', y)
    console.log('copyArr', copyArr);
    
    this.setState({
      boardConfig: copyArr,
      playerTurn: this.state.playerTurn === 'X' ? 'O' : 'X'
    }, () => console.log('state', this.state))

    // console.log('clicked column:', event.target.getAttribute('x'))
    // console.log('selectedColumn:', this.state.selectedColumn)
    // console.log('boardConfig:', this.state.boardConfig)
  }

  render(){
    return (
      <div>Hello from App
      <table>
      <tbody>
        <RenderRow boardConfig={this.state.boardConfig} onSquareClick={this.handleSquareClick.bind(this)}/>
      </tbody>
      </table>
      </div>
    )
  }
}


//export default App;

//<Board boardConfig={this.state.boardConfig} onSquareClick= />