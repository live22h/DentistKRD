import React from 'react'
import './title.css'

export default class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>{this.props.name}</h1>
                <h2>{this.props.description}</h2>
                <hr />
            </div>
        )
    }
}