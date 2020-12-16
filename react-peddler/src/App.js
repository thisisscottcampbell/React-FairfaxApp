import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage';
import Header from '../src/components/header/Header'
import SignIn from '../src/pages/loginORreg/SignIn'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
