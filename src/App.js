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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
