import React from 'react';
import './article.css';

const Article = ({imgurl, date, title}) => {
  return (
    <div className="godgonecrazy__blog-container_article">
      <div className="godgonecrazy__blog-container_article-image">
        <img src={imgurl} alt="blog" />
      </div>
      <div className="godgonecrazy__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
