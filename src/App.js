import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Work from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App"> 
                  <NavBar/>
                  <Route exact path="/"  component={Home}/> 
                  <Route exact path="/resume"  component={Resume}/> 
                  <Route exact path="/work"  component={Work}/> 
                  <Route exact path="/contact"  component={Contact}/> 
                  <Route exact path="/blog"  component={Blog}/> 
                  <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
