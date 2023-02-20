import React from 'react';
import ReactDOM from 'react-dom';
// helps in hooking the react file to html

import App from './App';
import './index.css'

//we still haven't created this app

ReactDOM.render(<App/>,document.getElementById('root'));
//this root id is nothing but the id of a div from the index.html file
//create App.js in src folder

//line 9 simply means that we are going to render the App component inside the div with id root