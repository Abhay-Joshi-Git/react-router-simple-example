import React from 'react';
import NavLink from './navLink.js';

export default (props) => {
    if (props.params.id) {
        return purchaseWithId(props.params.id)
    } else {
        return defaultTemplate();
    }
}

var purchaseWithId = (id) => (
    <div>
        purchased {id} !!
    </div>
);

var defaultTemplate = () => (
    <div>
        let's purchase!!
        <br />
        <br />
        <div className="well well-sm">
            <NavLink to='purchase/coal' > purchase 10 MT Coal </NavLink>
        </div>
    </div>
);