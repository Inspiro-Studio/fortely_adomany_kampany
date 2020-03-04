import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  SEO,
  Hero,
  About,
  USP,
  Coaching,
  // Mediacio,
  Prices,
  Book,
  Training,
  Contact
} from "../components/";
import _ from "lodash";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pap Andrea Coach" />
    <Hero data={_.pick(data, "hero")} />
    <About data={_.pick(data, "about")} />
    <USP data={_.pick(data, "usp")} />
    <Coaching data={_.pick(data, "coaching")} />
    {/* <Mediacio data={_.pick(data, "mediacio")} /> */}
    <Prices data={_.pick(data, "prices")} />
    <Book data={_.pick(data, "book", "andi")} />
    <Training data={_.pick(data, "training")} />
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
