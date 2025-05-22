import React from 'react';
import Layout from '../components/layout';
import Breadcrumb from '../components/hero/breadcrump';
import NotFound from '../components/404';

const NotFoundPage = () => {
    return(
        <Layout>
            <Breadcrumb/>
            <NotFound/>
        </Layout>
    );

};
export default NotFoundPage;