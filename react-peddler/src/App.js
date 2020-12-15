import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
