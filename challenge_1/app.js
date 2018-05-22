//NOTES:
// - the first move always starts with player X
//the app detects a win or tie and displays an appropriate message
//a button resets the game for a new round of gameplay
//once the page loads, no user-generated actions on the page may cause the entire page to reload
//separate concerns into MVC


//const newBoard = [["*","*","*"],["*","*","*"],["*","*","*"]]

//MODEL
var boardModel = {
  boardState: [["","",""],["","",""],["","",""]],
  columnWin: false,
  rowWin: false,
  diagWin: false,
  playerTurn: "X",
  winningPlayer: "",

  updateBoard: function(col, row, play){
    this.boardState[col][row] = play
    renderView();
  },

  checkForColumnWin: function(){
    
    for(let c = 0; c < 3; c++){
      if(this.boardState[c][0] !== ""){

        if(this.boardState[c][2] === this.boardState[c][1] && this.boardState[c][2] === this.boardState[c][0]){
          this.columnWin = true;
          this.winningPlayer = this.boardState[c][0];
          break;
        }
      } 
    }
    if(this.columnWin === false){
      this.checkForRowWin()
    } else {
      console.log('column win by:', this.winningPlayer)
    }
  },

  checkForRowWin: function(){
    for(let r = 0; r < 3; r++){
      if(this.boardState[0][r] !== ""){
        if(this.boardState[2][r] === this.boardState[1][r] && this.boardState[2][r] === this.boardState[0][r]){
          this.rowWin = true;
          this.winningPlayer = this.boardState[0][r];
          break;
        }
      }
    }
    if(this.rowWin === false){
     this.checkForMajorDiagWin()
    } else {
      console.log('row win by:', this.winningPlayer)
    }
  },

  checkForMajorDiagWin: function(){
    if(this.boardState[0][0] !== ""){
      if(this.boardState[0][0] === this.boardState[1][1] && this.boardState[1][1] === this.boardState[2][2]){
        this.diagWin = true;
        this.winningPlayer = this.boardState[0][0];
      }
    }
    if(this.diagWin === false){
      this.checkForMinorDiagWin()
    } else {
      console.log('major Diag win by:', this.winningPlayer)
    }
  },

  checkForMinorDiagWin: function(){
    if(this.boardState[0][2] !== ""){
      if(this.boardState[0][2] === this.boardState[1][1] && this.boardState[1][1] === this.boardState[2][0]){
        this.diagWin = true;
        this.winningPlayer = this.boardState[1][1];
      }
    }
    if(this.diagWin === true){
      console.log('minor diag win by:', this.winningPlayer)
    }
  } 
}

document.addEventListener('DOMContentLoaded', function(){
  renderView();
});

//VIEW
var renderView = function(){
  //Render gameboard

  var boardHTML = document.getElementById("gameBoard")
  
  //iterate through columns and rows
  for(let r = 0; r < 3; r++) {
    if(r === 0){
      boardHTML.innerHTML = "";
    } 
    boardHTML.innerHTML += (`<tr id='row${r}'></tr>`);
    
    for(let c = 0; c < 3; c++){  
      let boardSquareHTML = `<td onclick=controller.handleSquareClick(this) id='col:${c}_row:${r}'>${boardModel.boardState[c][r]}</td>`
      document.getElementById(`row${r}`).innerHTML += boardSquareHTML;
    }
  }
}


//CONTROLLER
var controller = {
  handleSquareClick: function(element){

    console.log("element ID:", element.id)
    let col = element.id.slice(4,5)
    let row = element.id.slice(10,11)
    let play;

    //call to update board state
    if(element.innerHTML === ""){ 
      play = boardModel.playerTurn;

      if(boardModel.playerTurn === "X") {
        boardModel.playerTurn = "O"
      } else {
        boardModel.playerTurn = "X"
      }
      boardModel.updateBoard(col, row, play)
      boardModel.checkForColumnWin();
    } 
    
  },

  handleButtonClick: function(){
    boardModel.boardState = "";
    boardModel.boardState = [["","",""],["","",""],["","",""]];
    boardModel.columnWin = false;
    boardModel.rowWin = false;
    boardModel.diagWin = false;
    boardModel.playerTurn = "X";
    boardModel.winningPlayer = "";

    renderView();
  }
}





