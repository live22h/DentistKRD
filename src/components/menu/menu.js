import React from 'react'
import {NavLink} from 'react-router-dom'
import './menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <ul className="menu">
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/services">Услуги</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/order">Записаться на прием</NavLink></li>
            </ul>
        )
    }
}