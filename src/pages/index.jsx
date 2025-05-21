import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Welcome from '../components/featured';
import WhyChooseUs from '../components/whychooseus';
import HomeServices from '../components/services/homeservices';
import Punchline from '../components/consultant/punchline';
import Testimonial from '../components/testimonial';
import ServiceCategory from '../components/services/category';
import Portfolio from '../components/portfolio';
import Skills from '../components/portfolio/skills';
import HomeBlog from '../components/blog/homeblog';

const Homepage = () => {
    return(
        <Layout>
            <Hero/>
            <Welcome/>
            <WhyChooseUs/>
            <HomeServices/>
            <Punchline/>
            <Testimonial/>
            <ServiceCategory/>
            <Portfolio/>
            <Skills/>
            <HomeBlog/>
        </Layout>
    );
};
export  default Homepage;