import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{description, imageUrl,author,readmore}=this.props;
    return (
      <div className="newsitem">
        <div className="image">
            <img src={imageUrl} alt="" srcset="" />
        </div>
        <div className="content">
            <p>{description}</p>
        </div>
        <div className="author">
            <p>{author}</p>
        </div>
        <div className="readmore">
            <a href={readmore}>Read More</a>
        </div>
      </div>
    )
  }
}
