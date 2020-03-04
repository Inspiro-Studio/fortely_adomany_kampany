import React from "react";
// import moment from "moment"
// import Img from "gatsby-image";
import { navigate } from "gatsby";
import { replaceHungarianChars } from "../../utils";
import "./ArticleThumbnails.scss";

const Thumbnail = ({ article }) => (
  <div
    className="col-12 article-thumbnail p-5 my-3 text-justify"
    onClick={() => navigate(replaceHungarianChars(article.fields.slug))}
  >
    <div className="row">
      <div className="col-sm">
        <h2 className="text-left mb-4" style={{ fontWeight: 600 }}>
          {article.frontmatter.title}
        </h2>
        <p className="mt-2 lead text-left">{article.frontmatter.description}</p>
        <p className="text-muted">
          {article.frontmatter.date} · {article.timeToRead} perc olvasás
        </p>
      </div>
      <div className="col-sm text-center p-1 justify-content-center align-self-center">
        <img
          src={article.frontmatter.image}
          className="hero-img"
          alt="Kezdőkép"
        />
      </div>
    </div>
  </div>
);

export default function ArticleThumbnails({ articles }) {
  return (
    <section id="article">
      <div className="container">
        <div className="row">
          {articles.map((article, i) => (
            <Thumbnail article={article} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
