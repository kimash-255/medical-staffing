import Breadcrumb from "../../components/hero/breadcrump";
import Layout from "../../components/layout";
import Portfolio from "../../components/portfolio";
import Skills from "../../components/portfolio/skills";
import FaqSection from "../../components/services/faq";
import HomeServices from "../../components/services/homeservices";

const ServicesPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <HomeServices />
      <Skills />
      <Portfolio />
      {/* <FaqSection/> */}
    </Layout>
  );
};
export default ServicesPage;
