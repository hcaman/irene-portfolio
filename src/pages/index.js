import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import About from '../components/about';
import Qualification from '../components/qualification';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Testimonial from '../components/testimonial';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <Seo title={''} />
    <About />
    <Qualification />
    <Services />
    <Portfolio />
    <Testimonial />
    <Contact />
  </Layout>
);

export default IndexPage;
