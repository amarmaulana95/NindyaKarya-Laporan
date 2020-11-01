import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from '../components/dashboard/Dashboard'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Welcome from '../components/welcome/Welcome'
import Login from '../components/login'
import Grafik from '../components/grafik/Grafik'


export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/sign-in" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/grafik" component={Grafik} />
                    <Route path="*">
                        <Welcome />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
