import React from 'react'; 
import './App.css';
import NavBar from './components/layout/NavBar';
import MainSection from './components/layout/MainSection';

const App = () =>{
  return (
    <div className="mainContainer">
       <NavBar/>
      <MainSection/>
    </div>
  );
}

export default App;
