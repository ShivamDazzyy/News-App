import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
  const articles=props.articles;
  console.log(articles);
  return (
    <div className='random'>
      <div className="news">
        <h1>Today's top news headlines</h1>
      </div>
      <br />
      <br />
      <div className="newscontent">
        {articles.map((article) => (
          <div className="mycontent" key={article.url}>
            <NewsItem
              imageUrl={article.urlToImage}
              description={article.description}
              author={article.author}
              readmore={article.url}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default News;
