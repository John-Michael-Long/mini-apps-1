// X - Use Express to serve up an index.html file and its associated assets
// X - The client app should be able to submit JSON data to the server, 
//    receive a CSV-formatted response and then display the result on the same page.
// Implement all the report generation logic on the server. Do not use any external libraries (such as via npm).
// For basic requirements, data-entry of the JSON on the client should be done using 
// an HTML form with a single textarea input field (for the entire JSON text) and a submitbutton. 
// When the user clicks submit, POST the form data to the server.

const express = require('express');
const path = require('path')
var bodyParser = require('body-parser')
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.use('/data', bodyParser.json());

app.post('/data', (req, res) => {

  var resData = handlePostData(req.body);

  res.status(201)

  res.json(resData)
})

app.listen(3000, () => console.log("listening on port 3000"))

var handlePostData = function(data) {
  let result = [];

  let keys = Object.keys(data)
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    if(key !== "children"){
      result.push(key)
    } else {
      result.push('\n')
    }
  }
    
  var recurse = function(manager){

    let keys = Object.keys(manager)
    for(let i = 0; i < keys.length; i++){
      let key = keys[i];
      if(key !== "children"){
        result.push(manager[key])
      } else {
        result.push('\n')
      }
    }
    for(let i = 0; i < manager.children.length; i++){
      recurse(manager.children[i])
    }
    return;
  }
  recurse(data)

  return result.join();

}






