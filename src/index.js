import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
// import "bootstrap/disit/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import Counter from './components/counter';
// import Counters from './components/counters';
import Movies from './components/Movies/movies';
// import NavBar from './components/Movies/NavComponents/navbar';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import Myname from './components/myName';
// import Button from './components/button';
// import Header from './components/webpage/header';

// ReactDOM.render(<Counters />, document.getElementById("root"));
// ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
  

    
// ReactDOM.render(<Counters />, document.getElementById("root"));

// registerServiceWorker();
