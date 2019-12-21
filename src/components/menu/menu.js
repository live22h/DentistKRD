import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'

export default class Menu extends React.Component {
    render() {
        return (

            <nav class="main-nav">
                <ul class="nav-links">
                    <li>
                        <NavLink to="/">
                            <img src="home.svg" class="nav-links__icon" />
                            <span class="nav-links__label">Главная</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">
                            <img src="tooth.svg" class="nav-links__icon" />
                            <span class="nav-links__label">Услуги</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">
                            <img src="contact.svg" class="nav-links__icon" />
                            <span class="nav-links__label">Контакты</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <img src="calendar.svg" class="nav-links__icon" />
                            <span class="nav-links__label">Записаться</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}