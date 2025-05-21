import React from "react";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/hero/breadcrump";
import About from "../../components/about";
import Fid from "../../components/about/fid";
import Success from "../../components/about/success";
import Expertise from "../../components/about/expertise";

const AboutPage = () => {
    return(
        <Layout>
            <Breadcrumb/>
            <About/>
            <Fid/>
            <Success/>
            <Expertise/>
        </Layout>
    );
};
export default AboutPage;