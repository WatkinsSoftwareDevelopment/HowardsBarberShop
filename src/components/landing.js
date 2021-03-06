import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class Landing extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right headerText">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
          <img className='indexLogo' alt="Howards" src="src/images/HowardsLogo.png" />
          <img className='indexPic' alt="Howards" src="src/images/HowardsChairs.jpg" />
        <Footer />
      </div>
    );
  }
}