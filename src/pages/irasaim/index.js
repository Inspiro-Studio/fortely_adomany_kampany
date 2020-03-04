import React from "react";
import { BlogLayout, SEO } from "../../components";
import { ArticleThumbnails } from "../../components/Articles";
import { graphql } from "gatsby";

export default function Articles({ data }) {
  const articles = data.allMarkdownRemark.nodes;

  return (
    <BlogLayout>
      <SEO title="PanderaCoach" />
      <ArticleThumbnails articles={articles} />
    </BlogLayout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
          image
          date
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
`;
