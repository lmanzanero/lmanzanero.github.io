import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div id="resume">
                    <div className="card card-body bg-info section-padding pb-5">
                        <h2>My Resume</h2>  
                    </div>
                    <div className="card card-body py-5">
                    <img className="img-fluid rounded-cirlce header-image mx-auto d-block" src="/imgs/iphone-smartphone-apps-apple-inc-40011.jpeg" alt="Me"/>
                        <h3>Where have I worked?</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil aut praesentium rerum nesciunt saepe voluptates sequi, voluptatem non veritatis, officiis quidem provident dolorem id dicta eos quae ipsum a vel.</p>
                        <div className="card-deck">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">DevMasters</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quaerat.</p>
                                    <p className="p-2 mb-3 bg-dark text-white">
                                        Position: Full Stack Developer
                                    </p>
                                    <p className="p-2 mb-3 bg-dark text-white">
                                        Phone: (444) 444-4444
                                    </p>
                                    <div className="card-footer">
                                        <h6 className="text-muted">Dates: 2015 - 2017</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Websites Pro</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quaerat.</p>
                                        <p className="p-2 mb-3 bg-dark text-white">
                                            Position: Front End Developer
                                        </p>
                                        <p className="p-2 mb-3 bg-dark text-white">
                                            Phone: (333) 333-3333
                                        </p>
                                        <div className="card-footer">
                                            <h6 className="text-muted">Dates: 2013 - 2015</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">123 Designs</h4>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quaerat.</p>
                                            <p className="p-2 mb-3 bg-dark text-white">
                                                Position: Designer
                                            </p>
                                            <p className="p-2 mb-3 bg-dark text-white">
                                                Phone: (222) 222-2222
                                            </p>
                                            <div className="card-footer">
                                                <h6 className="text-muted">Dates: 2010 - 2013</h6>
                                            </div>
                                        </div>
                                    </div> 
                        </div>  
                    </div>
                </div>
        );
    }
}

export default Resume;