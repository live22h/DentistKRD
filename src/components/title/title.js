import React from 'react'
import './title.css'
import { Button } from 'react-bootstrap'
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <div className="doctor-lastname">{this.props.family}</div>
                <div className="doctor-name">{this.props.name}</div>
                <hr />
                <div className="doctor-description">{this.props.description}</div>
                <div className="skills">
                    <div className="years">Опыт работы более <big>25</big> лет</div>
                    <div className="operations">Более <big>1500</big> установленных имплантов</div>
                    <div className="clients"><big>3000</big> довольных клиентов</div>
                </div>

                <div className="action-button">
                    <Button variant="outline-light">ЗАПИСЬ НА ПРИЕМ</Button>
                </div>
            </div>
        )
    }
}