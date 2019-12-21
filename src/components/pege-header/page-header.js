import React from 'react'
import './page-header.css'

export default class PageTitle extends React.Component {
    render() {
        return (
            <header>
                <h2 class="page-header">{this.props.title}</h2>
            </header>
        )
    }
}