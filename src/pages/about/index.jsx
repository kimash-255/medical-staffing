import React from "react";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/hero/breadcrump";
import About from "../../components/about";
import OurValues from "../../components/about/fid";
import Success from "../../components/about/success";
import MissionCommitment from "../../components/about/expertise";

const AboutPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <About />
      <OurValues />
      <MissionCommitment />
      {/* <Success /> */}
    </Layout>
  );
};
export default AboutPage;
