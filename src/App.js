import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
// import movies from './components/Movies/movies';
// import count from './components/Movies/count';
import admin from './components/Movies/NavComponents/admin';
import NavBar from './components/Movies/NavComponents/navbar';
import posts from './components/Movies/NavComponents/posts';
import products from './components/Movies/NavComponents/products';
import "./App.css";

class App extends Component{
    render(){
        return(
            <div>
                 <NavBar/>
            <main className='container'>
                <Switch>
                <Route path="/products" component={products} />
                {/* <Route path="/posts" component={posts}/> */}
                <Route path="/posts/:postId" component={posts} />

                <Route path="/admin" component={admin}/>
                </Switch>
            
                 
            </main>

            </div>
           
        );
    }
}

export default App;