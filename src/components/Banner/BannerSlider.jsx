import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 md:mt-6 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/30">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner1}
            alt="Peaceful Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-transparent flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg">
              Your Peaceful Living Awaits
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed">
              Escape the chaos — find a serene and modern home in your dream
              neighborhood with{" "}
              <span className="text-blue-300 font-semibold">Home Nest</span>.
            </p>
            <button className="mt-3 sm:mt-4 md:mt-5 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              Explore Homes
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner2}
            alt="Smart City Homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-start px-4 sm:px-6 md:px-14 lg:px-20">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-xl">
              Smart Homes for Smart Living
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
              Live in comfort and control — energy-efficient homes equipped with
              cutting-edge smart technology, built for your lifestyle.
            </p>
            <button className="mt-3 sm:mt-4 md:mt-5 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              Discover Smart Homes
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={banner3}
            alt="Investment Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg">
              Invest in Your Future, Today
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed">
              Whether you're buying your first home or expanding your portfolio,{" "}
              <span className="text-blue-300 font-semibold">Home Nest</span> makes
              real estate investing effortless, secure, and rewarding.
            </p>
            <button className="mt-3 sm:mt-4 md:mt-5 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg">
              Start Investing
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
