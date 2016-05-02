import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './navLink.js';

export default (props) => (
    <div>
        {getNavBar()}
        {props.children}
    </div>
);


var getNavBar = (props) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <IndexLink className="navbar-brand" activeClassName="activeLink" to="/">ERP Routing</IndexLink>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/purchase" /*activeClassName='customLink'*/>Purchase</NavLink></li>
                    <li><NavLink to="/produce">Produce</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
);