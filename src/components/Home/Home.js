import React, { Component } from 'react';

class Home extends Component {
    render() {
        return ( 
    
            <header id="home-section">
                <div className="dark-overlay">
                    <div className="home-inner">
                        <div className="container">
                            <div className="row no-gutters">
                               <h1 className="col-12 text-center">Hello!</h1> 
                               <h1 className="col-12 text-center">I'm an Experienced Full Stack Web Developer</h1> 
                               <h1 className="col-12 text-center">and also an Environmental Scientist</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        );
    }
}

export default Home;