import './App.css';
import Cards from './components/Cards';
import Goals from './components/Goals';
import Header from './components/Header';
import Information from './components/Information';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="app">
        <Header />
        <Cards />
        <Switch>
          <Route path="/" exact component={Goals}></Route>
          <Route path="/information/:id :name" component={Information}></Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
