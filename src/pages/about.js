import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
        I'm also a retired rapper and a renaissance man.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta
      name="description"
      content="this is the page where I like I talk about my damn self."
    />
  </>
);
export default AboutPage;
