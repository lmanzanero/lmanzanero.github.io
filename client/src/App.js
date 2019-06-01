import React from 'react'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

//components 
import NavBar from './components/layout/NavBar'; 

//routes 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';

const App = () =>{
  return (
    <Router>
      <div className="mainContainer">
        <NavBar/>
        <main className="mainSection">
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/admin' component={Admin}></Route>
        </main>  
      </div>
    </Router>
  );
}

export default App;
