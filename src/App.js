import Header from './component/Header'
import Home from './component/Home'
import Fav from './component/Fav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/fav'>
            <Fav />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
