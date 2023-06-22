import * as React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/L.B._the_birds_and_the_bees_diagram_editorial_illustration_44214871-c101-4ed0-91e3-edae86d9ca9f.png"
      />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page DOGG" />;

export default IndexPage;
