import './App.css';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
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
