import React from 'react';
import './App.css';
import {Switch , Route} from "react-router-dom";
import Navbar from './Nav/nav';
import Home from './Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
function App() {
  return (
<>
<Navbar/>
<Switch>
  <Route path="/" exact component={Home}/>
</Switch>
</>
  );
}

export default App;