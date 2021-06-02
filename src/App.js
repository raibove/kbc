import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';
import Result from './components/Result';

const App = ()=> {
  const routes = <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/quiz" exact>
      <Question />
    </Route>
    <Route path="/result" exact>
      <Result />
    </Route>
    <Redirect to="/"/>
    </Switch>
  return (
    <Router>
      {routes}
    </Router>
  );
};
export default App;
