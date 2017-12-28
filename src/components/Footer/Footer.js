import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer id="main-footer" className="p-5 bg-dark text-white">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <Link to="/" className="btn btn-outline-light"><i className="fa fa-cloud"></i> Download Resume</Link>
                        </div>
                        <div className="col-md-6 mb-1">
                        <div className="name d-flex flex-row justify-content-between align-items-center"> 
                            <Link to="/" className="btn btn-outline-info"><i className="fa fa-twitter"></i></Link>
                            <Link to="/" className="btn btn-outline-info"><i className="fa fa-facebook"></i></Link>
                            <Link to="/" className="btn btn-outline-info"><i className="fa fa-instagram"></i></Link>
                            <Link to="/" className="btn btn-outline-info"><i className="fa fa-github"></i></Link>
                          </div>
                        </div>
                    </div>
            </footer>
        );
    }
}

export default Footer;