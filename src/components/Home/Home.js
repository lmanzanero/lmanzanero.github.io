import React, { Component } from 'react';

class Home extends Component {
    render() {
        return ( 
    <div>
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
            <div id="home">
            <div className="card card-body bg-primary text-white py-5">
                <h2>Welcome to my page</h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit, voluptas exercitationem nobis, error cumque veritatis, pariatur assumenda sint saepe voluptate maxime fuga quis quo unde! Mollitia facere eius odio.</p>
            </div>
            <div className="container py-5">
                <h3>My Skills</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem eligendi fugiat eius rerum ea voluptatum qui amet! Iusto, eius error quia quos a fugit? Nam ab quia et magnam?</p>
                <hr/>
                <h4>HTML</h4>
                <div className="progress mb-3">  
                     <div className="progress-bar bg-success" style={{width: 100%+"%"}}></div>
                </div> 
                <h4>CSS</h4>
                <div className="progress mb-3">  
                     <div className="progress-bar bg-success" style={{width: 100+"%"}}></div>
                </div> 
                <h4>JavaScript</h4>
                <div className="progress mb-3">  
                     <div className="progress-bar bg-success" style={{width: 90+"%"}}></div>
                </div> 
                <h4>Python</h4>
                <div className="progress mb-3">  
                     <div className="progress-bar bg-success" style={{width: 80+"%"}}></div>
                </div> 
                <h4>Php</h4>
                <div className="progress mb-3">  
                     <div className="progress-bar bg-success" style={{width: 70+"%"}}></div>
                </div> 
            </div>
        </div>
        </div>
        );
    }
}

export default Home;