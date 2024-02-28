import React from 'react';

const NewsItem = ({ description, imageUrl, author, readmore }) => {
  return (
    <div className="newsitem">
      <div className="image">
        <img src={imageUrl} alt="" srcSet="" />
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
  );
};

export default NewsItem;
