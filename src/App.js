import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from './views/Favorites'
import Home from './views/Home'
import Popular from './views/Popular'
import PopularBattle from './views/PopularBattle'
import Weekly from './views/Weekly'
import WeeklyBattle from './views/WeeklyBattle'
import Card from './components/Card';
import './App.css'


export default class App extends Component {

  render() {
    return (

      <BrowserRouter>
          <nav style={{margin : " 0 auto 2%", padding : "1% 0 1% 5%", width : "70%", backgroundColor : "black", }}>
            <Link to="/" style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Home</Link>
            <Link to="/weekly" style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Weekly</Link>
            <Link to="/weekly-battle" style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Weekly Battle</Link>
            <Link to="/popular"style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Popular </Link>
            <Link to="/popular-battle" style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Popular Battle</Link>
            <Link to="/favorites" style={{marginRight : "2%", color : "white", textDecoration : "none", fontSize: "1.9em"}} class="nav-links">Favorites</Link>
            {/* <Link to="/cards">Cards</Link> */}
          </nav> 
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/weekly" component={Weekly}/>
              <Route exact path="/weekly-battle" component={WeeklyBattle}/>
              <Route exact path="/popular" component={Popular}/>
              <Route exact path="/popular-battle" component={PopularBattle}/>
              <Route exact path="/favorites" component={Favorites}/>
              {/* A supprimer : test */}
              {/* <Route exact path="/cards" component={Card}/>  */}
          </Switch>
      </BrowserRouter>
    )
  }

}
