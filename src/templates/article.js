import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { BlogNav } from "../components/Nav"
import { Footer } from "../components/Footer"

const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const ArticleTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
  image,
  timeToRead,
}) => {
  const ArticleContent = contentComponent || Content

  return (
    <section id="article">
      {helmet || ""}
      <div className="container">
        <p className="text-muted">
          {date} · {timeToRead} perc olvasás
        </p>
        <h2 className="mb-2 text-left text-primary">{title}</h2>
        <img
          className="my-2"
          src={image}
          alt={title}
          style={{ width: "100%" }}
        />
        <p className="lead text-left">{description}</p>
        <ArticleContent content={content} className="article-content" />
      </div>
    </section>
  )
}

const Article = ({ data }) => {
  const { markdownRemark: article } = data

  const { description, title, date, image, keywords } = article.frontmatter

  return (
    <>
      <BlogNav />
      <ArticleTemplate
        content={article.html}
        contentComponent={HTMLContent}
        description={description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
          </Helmet>
        }
        title={title}
        date={date}
        image={image}
        timeToRead={article.timeToRead}
      />
      <Footer />
    </>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Article

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        title
        description
        image
        date
      }
    }
  }
`
