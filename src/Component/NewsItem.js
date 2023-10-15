import React, { Component, useEffect, useState } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title, description, urlToImage, url} = this.props
        return (
            <div class="card" style={{width: '18rem', boxShadow: '10px 10px 10px'}}>
                <img src={urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        {/* <p class="card-text">{description}</p> */}
                        <a href={url} class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        )
    }
}
