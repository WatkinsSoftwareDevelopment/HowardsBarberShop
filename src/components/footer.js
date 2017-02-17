import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-default navbar-fixed-bottom">\
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right footerText">
                    <li>
                        <i className="fa fa-copyright" aria-hidden="true"></i>
                        Howards BarberShop All Rights Reserved
                        <i className="fa fa-registered" aria-hidden="true"></i>
                    </li>
                    <li><a className='icon' href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                    <li><a className='icon' href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a className='icon' href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-left footerText">
                    <li className="ww">Website designed and developed by: WWDesigns LLC</li>
                </ul>
            </div>
          </nav>
      </div>
    );
  }
}