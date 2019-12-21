import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import PageHeader from '../../components/pege-header'

export default class Order extends React.Component {
    render () {
        return (
            <ReactCSSTransitionGroup
            transitionAppear={true}
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}
            className="order"
            transitionName="page-animation">
           <div className="order page">
                <PageHeader title='Запись на приём'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam.</p>
            </div>
            </ReactCSSTransitionGroup>
        )
    }
}