import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import ContentDetails from './ContentDetails';



const Content = () => {
    return (
        <div>
            <NavLink className="list-group-item" activeClassName="active" to="/content/city">city</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/content/sports">sports</NavLink>
            <Route path="/content/:contentName" component={ContentDetails} />
        </div>
    )
}

export default Content;