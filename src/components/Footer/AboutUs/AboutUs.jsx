import React from "react";
import { User, Home, Heart, Globe } from "lucide-react";
import homeHero from "../../../assets/home-hero.jpg";
import homeStory from "../../../assets/home-story.jpg";
import Man1 from "../../../assets/man-1.jpg";
import WomenImg from "../../../assets/women-2.jpg";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="space-y-20 max-w-7xl mx-auto px-6 py-12">
      <title> 
        About Us - HomeNest
      </title>
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Home<span className="text-blue-600">Nest</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto dark:text-white">
          At Home<span className="text-blue-600">Nest</span>, we are committed
          to making property search, buying, and selling seamless for everyone.
          Whether you're looking for your dream home, a lucrative investment, or
          a cozy rental, Home<span className="text-blue-600">Nest</span> is your
          trusted partner.
        </p>
        <img
          src={homeHero}
          alt="HomeNest Hero"
          className="rounded-xl mt-8 shadow-lg mx-auto w-full object-cover h-64 md:h-96"
        />
      </section>

      {/* Our Story Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={homeStory}
            alt="Our Story"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-700 text-justify dark:text-white">
            Home<span className="text-blue-600">Nest</span> started with a
            simple mission: to bridge the gap between people and their dream
            homes. Founded in 2018, our platform has evolved into a trusted real
            estate hub, serving thousands of buyers, renters, and investors
            across the country. We believe that finding the right property
            should be exciting and stress-free. That's why our team of dedicated
            professionals works tirelessly to bring you only the best listings
            and insightful guidance.
          </p>
          <p className="text-gray-700 text-justify dark:text-white">
            Over the years, we've developed cutting-edge technology and
            personalized customer service that sets Home
            <span className="text-blue-600">Nest</span> apart from the
            competition. From residential apartments to luxury villas and
            commercial spaces, our portfolio caters to a diverse audience.
            Trust, transparency, and excellence are the core pillars that define
            our journey.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="text-center space-y-12">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="card p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
            <Home className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="font-bold text-xl mb-2">Customer Focus</h3>
            <p className="text-gray-700 text-sm dark:text-white">
              We prioritize our customers’ needs above all. Our dedicated team
              ensures a seamless and personalized experience for every client.
            </p>
          </div>
          <div className="card p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
            <Globe className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-700 text-sm dark:text-white">
              We leverage technology to simplify property search, making it
              faster and smarter. Our platform continuously evolves with the
              market trends.
            </p>
          </div>
          <div className="card p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
            <Heart className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-700 text-sm dark:text-white">
              Transparency and honesty guide every transaction. We believe in
              building long-term relationships based on trust.
            </p>
          </div>
          <div className="card p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition">
            <User className="mx-auto mb-4 text-blue-600" size={48} />
            <h3 className="font-bold text-xl mb-2">Expert Team</h3>
            <p className="text-gray-700 text-sm dark:text-white">
              Our experienced team of real estate professionals provides expert
              advice, ensuring that clients make informed and confident
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center">
          Meet Our Expert Team
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto dark:text-white">
          Our team consists of highly skilled professionals dedicated to making
          your real estate journey seamless and successful. Each member brings
          years of experience and a passion for excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="card shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src={Man1}
              alt="Alice Johnson"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-200"
            />
            <h3 className="font-bold text-xl">Alice Johnson</h3>
            <p className="text-sm text-gray-700 dark:text-white mt-2">
              Lead Real Estate Consultant. Alice specializes in residential
              properties, guiding clients to their dream homes with unmatched
              expertise and care.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="card shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=300&h=300"
              alt="Mark Thompson"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-200"
            />
            <h3 className="font-bold text-xl">Mark Thompson</h3>
            <p className="text-sm text-gray-700 dark:text-white mt-2">
              Commercial Property Specialist. Mark has extensive experience in
              commercial real estate, helping businesses find the perfect
              location to grow and thrive.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="card shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
            <img
              src={WomenImg}
              alt="Sara Lee"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover border-4 border-blue-200"
            />
            <h3 className="font-bold text-xl">Sara Lee</h3>
            <p className="text-sm text-gray-700 dark:text-white mt-2">
              Customer Relations Manager. Sara ensures clients have a smooth and
              enjoyable experience, addressing their needs and building
              long-term trust.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-50 dark:bg-gray-800 p-12 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Journey with Home<span className="text-blue-600">Nest</span>
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto dark:text-white">
          Whether you’re buying, renting, or investing, HomeNest provides a
          seamless and professional experience every step of the way. Discover
          your dream property today!
        </p>
        <Link to="/all-properties" className="btn btn-primary px-8 py-3 rounded-full text-white hover:bg-blue-700 transition">
          Explore Properties
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
