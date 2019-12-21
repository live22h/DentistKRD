import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import Card from '../../components/card'
import PageHeader from '../../components/pege-header'

export default class Services extends React.Component {
    render() {
        return (

            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionLeaveTimeout={500}
                transitionEnterTimeout={500}
                className="services"
                transitionName="page-animation">
                <div className="services page">
                    <PageHeader title="Услуги"/>

      <main class="flyin-grid">
      <Card img="implantaciya-zubov.jpg" title="Имплантация" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
      <Card img="ef516c5b879e.jpg" title="Чистка зубов" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
      <Card img="ffa02094.jpg" title="Лечение зубов" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
      <Card img="shutterstock_504535285.jpg" title="Отбеливание" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
      <Card img="23a048cf7dbc83c0c1ad129ba1e1a718.jpg" title="Лечение дёсен" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
      <Card img="pricelny-snimok-zuba-medicor.jpg" title="Рентген зуба" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor modi obcaecati veritatis tempora voluptatibus explicabo soluta at, dicta accusantium, provident, magnam repellat! Fuga aliquam tenetur a exercitationem ducimus rem quibusdam."/>
    </main>



                </div>
            </ReactCSSTransitionGroup>
        )
    }
}