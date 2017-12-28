import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                    <div className="card card-body bg-info section-padding pb-5">
                        <h2>Contact</h2>
                    </div>
                    <div className="card card-body py-5">
                    <img className="img-fluid rounded-cirlce header-image mx-auto d-block" src="/imgs/iphone-smartphone-apps-apple-inc-40011.jpeg" alt="Me"/>
                        <h3>Get in Touch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vel aperiam suscipit vero nam, explicabo placeat! Sunt accusantium molestiae consequuntur aspernatur placeat saepe doloribus, natus inventore necessitatibus voluptatibus dolores deleniti?</p>
                        <form>
                           <div className="form-group">
                               <div className="input-group input-group-lg">
                                   <span className="input-group-addon bg-info text-white">
                                       <i className="fa fa-user"></i>
                                   </span>
                                   <input type="text" className="form-control bg-dark text-white" placeholder="Name"/>
                               </div>
                           </div> 
                           <div className="form-group">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon bg-info text-white">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                    <input type="email" className="form-control bg-dark text-white" placeholder="Email"/>
                                </div>
                            </div> 
                            <div className="form-group">
                               <div className="input-group input-group-lg">
                                   <span className="input-group-addon bg-info text-white">
                                       <i className="fa fa-pencil"></i>
                                   </span>
                                   <textarea className="form-control bg-dark text-white" placeholder="Message"></textarea>
                               </div>
                           </div> 
                           <input type="submit" value="submit" className="btn btn-info btn-block btn-lg"/>
                        </form>
                    </div>
                </div>
        );
    }
}

export default Contact;