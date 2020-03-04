import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, Hero, Contact } from "../components/";
import _ from "lodash";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Fortélysátor" />
    <Hero data={_.pick(data, "hero")} />
    <Contact data={_.pick(data, "contact")} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    hero: file(relativePath: { eq: "" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
