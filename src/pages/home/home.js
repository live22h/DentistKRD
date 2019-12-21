import React from 'react'
import './home.css'
import Title from '../../components/title'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

export default class Home extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}
                className="home page"
                transitionName="page-animation">
                <img src="av.png" className="person" />
                <Title name="Александр Владимирович" family="Севастьянов" description="Ваш семейный стоматолог" />

              
            </ReactCSSTransitionGroup>
        )
    }
}