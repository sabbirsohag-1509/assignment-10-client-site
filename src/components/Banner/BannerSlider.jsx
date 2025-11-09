import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 md:mt-6 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/30">
      <Slider {...settings}>
        {/* --- Slide 1 --- */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner1}
            alt="Peaceful Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              Your Peaceful Living Awaits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 max-w-lg sm:max-w-2xl leading-relaxed"
            >
              Escape the chaos — find a serene and modern home in your dream
              neighborhood with{" "}
              <span className="text-blue-300 font-semibold">Home Nest</span>.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 sm:mt-6 px-5 sm:px-7 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Explore Homes
            </motion.button>
          </div>
        </div>

        {/* --- Slide 2 --- */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner2}
            alt="Smart City Homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-start px-5 sm:px-8 md:px-14 lg:px-20">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl"
            >
              Smart Homes for Smart Living
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 max-w-md sm:max-w-2xl"
            >
              Live in comfort and control — energy-efficient homes equipped with
              cutting-edge smart technology, built for your lifestyle.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 sm:mt-6 px-5 sm:px-7 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Discover Smart Homes
            </motion.button>
          </div>
        </div>

        {/* --- Slide 3 --- */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <img
            src={banner3}
            alt="Investment Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              Invest in Your Future, Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 max-w-md sm:max-w-2xl leading-relaxed"
            >
              Whether you're buying your first home or expanding your
              portfolio,{" "}
              <span className="text-blue-300 font-semibold">Home Nest</span>{" "}
              makes real estate investing effortless, secure, and rewarding.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 sm:mt-6 px-5 sm:px-7 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg"
            >
              Start Investing
            </motion.button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
