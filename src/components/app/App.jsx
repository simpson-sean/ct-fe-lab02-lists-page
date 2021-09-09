import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RickAndMortyContainer from '../../containers/RickAndMortyContainer';
import CharDetailContainer from '../../containers/CharDetailContainer';
import './App.css';



export default function App() {
// return <RickAndMortyContainer />;
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <RickAndMortyContainer />
          </Route>
          <Route exact path="/:id">
            <CharDetailContainer />
          </Route>
        </Switch>
      </Router>
    )
  }
