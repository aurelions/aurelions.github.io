// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import Home from './Components/Pages/index'


function App() {
  return (

    //Start of App Router
    <Router> 

      <Home />

    </Router> //End APP Router
  );
}

export default App;
