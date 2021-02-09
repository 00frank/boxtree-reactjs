import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import FiltradorTabla from './components/FiltradorTabla/FTabla'
import InfoProyecto from './components/InfoProyecto/InfoProyecto'
import Proyectos from './components/Proyectos/Proyectos'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  componentDidMount() {
    document.title = "BoxTree";
  }
  render() {
    return (
      <div className="App">
        <Router basename="/boxtree-reactjs">
          <Header />
          <Switch>
            <Route path="/proyectos">
              <Proyectos />
            </Route>
            <Route path="/info-proyecto">
              <InfoProyecto />
            </Route>
            <Route path="/">
              <FiltradorTabla />
            </Route>
            <Route path="*">
              <FiltradorTabla />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
