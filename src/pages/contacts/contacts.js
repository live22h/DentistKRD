import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

export default class Contacts extends React.Component {
    render () {
        return (
            <ReactCSSTransitionGroup
            transitionAppear={true}
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}
            className="contacts"
            transitionName="page-animation">
            <div className="contacts page">
                <h2>Contacts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}