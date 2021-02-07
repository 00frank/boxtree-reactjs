import './App.css';
import Header from './components/Header/Header'
import FiltradorTabla from './components/FiltradorTabla/FTabla'
import InfoProyecto from './components/InfoProyecto/InfoProyecto'
import Proyectos from './components/Proyectos/Proyectos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
