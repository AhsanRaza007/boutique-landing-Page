// import './App.css';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Navbar from "./Components/Nav/Navbar";
import Home from './Components/Home/Home'


function App() {

  const handleSignOut = () =>{

  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={false} handleSignOut={handleSignOut}/>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/products'>
            <div>products</div>
          </Route>

          <Route exact path='/gallery'>
            <div>gallery</div>
          </Route>
          <Route exact path='/login'>
            <div>Login</div>
          </Route>
          <Route exact path="*">
            <div>404 not found</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
