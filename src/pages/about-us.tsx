import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutUs = () => {
  return (
    <Layout title="About us">
      <p>We are the happies sticker store.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Us" />;

export default AboutUs;
