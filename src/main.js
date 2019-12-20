import React from 'react'
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Order from './pages/order'
import Contacts from './pages/contacts'
import Menu from './components/menu'

export default class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <Menu/>
                    <div className="content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/services" component={Services} />
                                <Route path="/contacts" component={Contacts} />
                                <Route path="/order" component={Order} />
                            </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}