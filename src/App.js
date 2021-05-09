import React from 'react';
import './css/App.css'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props} />    
    </BrowserRouter>
  );
}

export default App;
