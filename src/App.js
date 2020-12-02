import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
