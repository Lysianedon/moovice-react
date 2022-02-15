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
          <nav>
            <Link to="/">Home</Link>
            <Link to="/weekly">Weekly</Link>
            <Link to="/weekly-battle">Weekly Battle</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/popular-battle">Popular Battle</Link>
            <Link to="/favorites">Favorites</Link>
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
