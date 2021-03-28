import logo from './logo.svg';
import './App.css';
import 'materialize-css';
import {HashRouter, Route} from 'react-router-dom'
import { Button, Card, Row, Col, TextInput } from 'react-materialize';
import Home from './home';
import Login from './auth/login';
import Register from './auth/register';
import Dashborad from './dashboard';
import changePassword from './ChangePassword';

function App() {
  return (
    <div className="App">
      <HashRouter>    
      <Route path='/' exact component={Home}></Route> 
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/dashboard' component={Dashborad}></Route>
      <Route path="/changepassword" component={changePassword}></Route>
    </HashRouter>
  </div>
  );
}

export default App;
