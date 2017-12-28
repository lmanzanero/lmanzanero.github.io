import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div id="work">
                    <div className="card card-body bg-info section-padding pb-5">
                        <h3>My Portolio</h3> 
                    </div>
                    <div className="card card-body py-5">
                    <img className="img-fluid rounded-cirlce header-image mx-auto d-block" src="/imgs/iphone-smartphone-apps-apple-inc-40011.jpeg" alt="Me"/>
                        <h3>What i have build?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deserunt libero sint nesciunt alias dignissimos mollitia enim recusandae. Distinctio similique eius ab minus sunt delectus officiis fuga modi, nostrum porro.</p>
                        <div className="row no-gutters"> 
                            <div className="col-md-3">
                                <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox"> 
                                    <img src="https://unsplash.it/600.jpg?image=251" alt="works" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox"> 
                                    <img src="https://unsplash.it/600.jpg?image=252" alt="works" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox"> 
                                    <img src="https://unsplash.it/600.jpg?image=253" alt="works" className="img-fluid"/>
                                </a>
                            </div>
                            <div className="col-md-3">
                                <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox"> 
                                    <img src="https://unsplash.it/600.jpg?image=254" alt="works" className="img-fluid"/>
                                </a>
                            </div> 
                        </div>
                                                <div className="row no-gutters"> 
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox"> 
                                <img src="https://unsplash.it/600.jpg?image=255" alt="works" className="img-fluid"/>
                            </a>
                        </div>
                        <div className="col-md-3">
                             <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox"> 
                                 <img src="https://unsplash.it/600.jpg?image=256" alt="works" className="img-fluid"/>
                             </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=257" data-toggle="lightbox"> 
                                <img src="https://unsplash.it/600.jpg?image=257" alt="works" className="img-fluid"/>
                            </a>
                        </div>
                        <div className="col-md-3">
                            <a href="https://unsplash.it/1200/768.jpg?image=258" data-toggle="lightbox"> 
                                <img src="https://unsplash.it/600.jpg?image=258" alt="works" className="img-fluid"/>
                            </a>
                        </div> 
                    </div>
                    </div>
                </div>
        );
    }
}

export default Portfolio;