import React from 'react'
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from 'react-router-dom'
import Home from './components/home'
import Services from './components/services'
import Order from './components/order'
import Contacts from './components/contacts'

export default class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <h1>Севастьянов Александр Владимирович</h1>
                    <ul className="menu">
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/services">Услуги</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><NavLink to="/order">Записаться на прием</NavLink></li>
                    </ul>
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