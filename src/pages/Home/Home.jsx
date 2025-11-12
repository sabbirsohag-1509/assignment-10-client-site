import React from 'react';
import BannerSlider from '../../components/Banner/BannerSlider';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import HowItWorks from '../HowItWorks/HowItWorks';
import Testimonials from '../Testimonials/Testimonials';
import JoinWithUs from '../JoinWithUs/JoinWithUs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet> 
                <title>Home Nest - Real Estate Hub</title>
           </Helmet>
            {/* Banner Slider */}
            <section> 
                 <BannerSlider />
            </section>

            {/* //Featured Real Estates */}
            <section> 
                <FeaturedProperties></FeaturedProperties>
            </section>
            {/* Why Choose Us Section */}
            <section> 
                <WhyChooseUs></WhyChooseUs>
            </section>
            {/* How It Works Section */}
            <section> 
                <HowItWorks></HowItWorks>
            </section>
            {/* Testimonials Section */}
            <section> 
                <Testimonials></Testimonials>
            </section>
            {/* Join With Us Section */}
            <section> 
                <JoinWithUs></JoinWithUs>
            </section>
        </div>
    );
};

export default Home;