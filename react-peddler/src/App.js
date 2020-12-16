import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
