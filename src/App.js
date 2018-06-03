
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Prompt, Switch } from 'react-router-dom';
import Links from './components/Links';
import Form from './components/Form';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound'
import Content from './components/Content';

const App = (props) => {
    return (
        <Router>
            <div className="row">
                <section className="col-sm-2">
                    <Links />
                </section>
                <section className="col-sm-10">
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