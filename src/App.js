
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Prompt,Switch } from 'react-router-dom';


const Home = () => {
    return (
        <h1>Home</h1>
    )
}
const About = () => {
    return (
        <h1>About</h1>
    )
}

const NotFound = () => {
    return (
        <h1>NotFound</h1>
    )
}

class Form extends React.Component {
    constructor() {
        super(),
            this.state = {
                isChanged: false
            }
    }
    render() {
        return (
            <div >
                <h1>Form </h1>
                <Prompt
                 when={this.state.isChanged} 
                 message="Are you sure you want to leave ?"
                />
                <input onChange={() => {
                    this.setState({
                        isChanged: true
                    });
                }} type="text" />
            </div>
        )
    }
}

const Content = () => {
    return (
        <div>
            <NavLink className="list-group-item" activeClassName="active" to="/content/city">city</NavLink>
            <NavLink className="list-group-item" activeClassName="active" to="/content/sports">sports</NavLink>
            <Route path="/content/:contentName" component={ContentDetails} />
        </div>
    )
}


const ContentDetails = (props) => {
    return (
        <div>{props.match.params.contentName ?
            <div><img src={"http://lorempixel.com/400/200/" + props.match.params.contentName + "/3/"} />
            </div> : null}</div>
    )
}
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
const App = () => {
    return (
        <Router>
            <div className="row">
                <section className="col-sm-4">
                    <Links />
                </section>
                <section className="col-sm-8">
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/content" component={Content} />
                    <Route path="/form" component={Form} />
                    <Route component={NotFound} />
                    </Switch>
                </section>
            </div>

        </Router>
    )
}
    
export default App;