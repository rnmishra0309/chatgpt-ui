import React from "react";
import "./article.css";

const Article = ({ title, image, date }) => {
  return (
    <div className="gpt3__article-container__blog">
      <div className="gpt3__article-container__blog-img">
        <img src={image} alt={title} />
      </div>
      <div className="gpt3__article-container__blog-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
