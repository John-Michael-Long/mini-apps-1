import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App.jsx';

//NOTE: if you are exporting one thing use export default App  --> then you dont have to use curly braces: import {App} from ...
//if you are doing multiple things do:  put "exprot" in front of everything
//OR export an object that contains these: export {function1, function2,....}

console.log('app=', App)


ReactDOM.render(<App/>, document.getElementById('app'));