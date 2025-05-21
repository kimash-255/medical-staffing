import Breadcrumb from "../../components/hero/breadcrump";
import Layout from "../../components/layout";
import FaqSection from "../../components/services/faq";
import HomeServices from "../../components/services/homeservices";

 const ServicesPage = () => {
    return(
        <Layout>
            <Breadcrumb/>
            <HomeServices/>
            <FaqSection/>
        </Layout>
    );
 };
 export default ServicesPage;