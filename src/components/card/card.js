import React from 'react'
import './card.css'

export default class Card extends React.Component {
    render() {
        return (
            <div class="flyin-grid__item card">
                <img src={this.props.img} />
        <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>

        )
    }
}