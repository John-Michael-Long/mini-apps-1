import React from 'react';



export function RenderSquare(props) {
  return (
    props.rowArray.map((element, x) => 
      <td className="square" key={'square'+props.y+x} y={props.y} x={x} onClick={props.onSquareClick}>{ (element !== 0) ? element : ""}</td>
  ))
}
// render rows
export function RenderRow(props) {  
  return (
    props.boardConfig.map((rowArray, y) => 
      <tr key={'rows'+y}>
        <RenderSquare rowArray={rowArray} y={y} onSquareClick={props.onSquareClick}/>
      </tr>
  ))
}


//export default Board;

//. <Square x={x} y={y} />

//boardConfig={props.boardConfig}
