import React from 'react'
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom'

import Home from './home'
import Services from './services'
import Order from './order'
import Contacts from './contacts'

export default class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Севастьянов Александр Владимирович</h1>
                    <ul className="header">
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/services">Услуги</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><NavLink to="/order">Записаться на прием</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/services" component={Services} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/order" component={Order} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}