import React from 'react';
import BannerSlider from '../../components/Banner/BannerSlider';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';

const Home = () => {
    return (
        <div>
            {/* Banner Slider */}
            <section> 
                 <BannerSlider />
            </section>
            {/* //Featured Real Estates */}
            <section> 
                <FeaturedProperties></FeaturedProperties>
            </section>
          
        </div>
    );
};

export default Home;