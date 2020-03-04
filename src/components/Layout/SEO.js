import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import imageURL from "../../images/andi.png";

function SEO({ description, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = keywords || site.siteMetadata.keywords;

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="hu" />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@panderacoach" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
    </Helmet>
  );
}

export default SEO;
