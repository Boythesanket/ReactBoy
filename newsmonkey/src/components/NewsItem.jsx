import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <>
        <div className="box">
            <a href={newsUrl} target='_blank' rel="noopener noreferrer"><img src={imageUrl} alt={title ? title : "news"} /></a>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      </>
    )
  }
}

export default NewsItem