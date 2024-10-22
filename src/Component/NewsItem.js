import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, readMore, author, timezone } = this.props;

    return (
      <div>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? 'Unknown' : author} Last updated{' '}
                {!timezone ? 'Time Not Updated' : new Date(timezone).toUTCString()}
              </small>
            </p>
            <a href={readMore} className="btn btn-mn btn-primary">
              Read More !!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
