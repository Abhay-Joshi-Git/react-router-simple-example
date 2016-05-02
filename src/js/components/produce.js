import React from 'react';
import NavLink from './navLink.js';

export default (props) => (
    <div>
        Come on now, let's produce !!
        <br />
        <br />
        <div className="well well-sm">
            {getProduceQueryTemplate(props.location.query)}
        </div>
    </div>
);

var getProduceQueryTemplate = (query) => {
    if (query && query.qty) {
        return (
            <div>
                producing {query.qty} units ...
            </div>
        );
    } else {
        return <NavLink to={ { pathname: "produce", query: {qty : 100} } }> Produce 100 qty </NavLink>
    }
};