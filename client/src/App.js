import React from 'react'; 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

//components 
import NavBar from './components/layout/NavBar'; 

//routes 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

const App = () =>{
  return (
    <Router> 
        <Helmet>
            <meta charSet="utf-8" />
            <title>Luis Manzanero | Environmental Scientist, Innovator, Software Developer from Belize</title> 
            <meta name="description" content="I'm an aspiring environmental scientist, Innovator, and Software Developer from Belize. My goal is to preserve and protect our natural resources with the power of technology" />
            <meta name="keywords" content="Luis Manzanero, Environmental Scientist, Innovator, Software Developer, Web Developer, Android Developer, Kotlin Developer, Web Design Services" />
        </Helmet>
        <NavBar/>
        <main className="mainSection">
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/admin' component={Admin}></Route>
        </main>   
    </Router>
  );
}

export default App;
