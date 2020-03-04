import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, Hero, Contact } from "../components/";
import _ from "lodash";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pap Andrea Coach" />
    <Hero data={_.pick(data, "hero")} />
    <Contact data={_.pick(data, "contact")} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero/brain.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    contact: file(relativePath: { eq: "contact/contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    book: file(relativePath: { eq: "book.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    andi: file(relativePath: { eq: "andi.png" }) {
      childImageSharp {
        fixed(width: 280) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
