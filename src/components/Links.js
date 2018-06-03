import React from 'react';
import {NavLink} from 'react-router-dom';

const Links = () => {
    return (
        <div className="list-group">
            <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/form">Form</NavLink>
        </div>
    )
}
export default Links;