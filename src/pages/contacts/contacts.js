import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { faHome, faPhoneAlt, faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contacts extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}
                className="contacts"
                transitionName="page-animation">
                <div className="contacts page">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Контакты</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <FontAwesomeIcon icon={faHome} /> г. Краснодар, ул. Рашпилевская, 189/2
                            </div>
                            <div className="col-sm-12">
                                <FontAwesomeIcon icon={faPhoneAlt}/> <a href="tel:215-64-04">215-64-04</a>
                            </div>
                            <div className="col-sm-12">
                                <FontAwesomeIcon icon={faAt}/> <a href="mailto:savdent@yandex.ru">savdent@yandex.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}