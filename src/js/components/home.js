import React from 'react';
import NavLink from './navLink.js';
import { browserHistroy } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                Home !!
                <br />
                <br />
                <button
                    className="btn btn-primary"
                    onClick={() => {this.context.router.push('purchase')}}
                    > go to purchase
                </button>
            </div>
        );
    }
}

Home.contextTypes = {
    router: React.PropTypes.object
};

export default Home;