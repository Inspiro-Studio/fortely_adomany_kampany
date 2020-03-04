import React from "react";
import { SEO } from "../components/";
import NotFoundMessage from "../components/Messages/NotFoundMessage";

export default function SuccessPage() {
  return (
    // <Layout>
    <>
      <SEO title="Fortélysátor" />
      <NotFoundMessage />
    </>
    // </Layout>
  );
}
