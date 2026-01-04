import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { MapPin, CalendarDays } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  // Fetch Property details
  useEffect(() => {
    fetch(`https://home-nest-gamma.vercel.app/propertyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // Fetch Reviews
  useEffect(() => {
    fetch(`https://home-nest-gamma.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure reviews is always an array
        setReviews(Array.isArray(data) ? data : []);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loading />
      </div>
    );

  if (!property)
    return (
      <div className="text-center py-20 text-2xl font-bold md:text-3xl lg:text-4xl text-base-content">
        Property not found. Try again later.
      </div>
    );

  // Combine main + extra images
  const allImages = [
    property.imageURL,
    ...(property.images || []).filter(Boolean),
  ];

  const openModal = (img) => {
    setCurrentImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">
      <Helmet>
        <title>{property.propertyName} - HomeNest</title>
      </Helmet>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-primary font-semibold hover:underline mb-4 cursor-pointer"
      >
        <IoMdArrowRoundBack size={20} />
        Go Back
      </button>

      {/* Property Card */}
      <div className="bg-base-100 dark:bg-gray-900 rounded-2xl shadow-xl border border-base-300 dark:border-gray-700 overflow-hidden">
        {/* Images */}
        <div className="space-y-2">
          <img
            src={property.imageURL}
            alt={property.propertyName}
            className="w-full h-80 md:h-[420px] object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(property.imageURL)}
          />
          <div className="flex gap-2 overflow-x-auto py-2">
            {allImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${property.propertyName} ${idx + 1}`}
                className="h-20 md:h-28 w-28 md:w-36 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-transform duration-200 hover:scale-105"
                onClick={() => openModal(img)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-base-content">
            {property.propertyName}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70">
            <span className="flex items-center">
              <MapPin size={16} className="mr-1 text-primary" />
              {property.area}, {property.city}
            </span>
            <span className="flex items-center">
              <CalendarDays size={16} className="mr-1 text-primary" />
              {new Date(property.postedDate).toLocaleDateString()}
            </span>
          </div>

          <p className="leading-relaxed text-base-content/90">
            {property.description}
          </p>

          <div className="flex flex-wrap justify-between items-center border-t border-base-300 dark:border-gray-700 pt-4 gap-4">
            <p className="text-xl font-semibold text-primary flex items-center gap-1">
              <TbCurrencyTaka size={22} />
              {Number(property.price).toLocaleString()} Tk
            </p>
            <span className="badge badge-secondary badge-outline px-4 py-2 font-semibold">
              {property.category}
            </span>
          </div>
        </div>

        {/* Owner */}
        {(property.userName || property.userEmail) && (
          <div className="mt-6 h-24 bg-base-200 dark:bg-gray-800 rounded-xl p-5 flex items-center gap-4 border border-base-300 dark:border-gray-700 shadow-md">
            <img
              src={
                property.photoUrl ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt={property.userName || "User"}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-400 object-cover shadow-sm"
            />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-base-content">
                {property.userName || "Unknown User"}
              </h3>
              <p className="text-sm md:text-base text-base-content/70">
                {property.userEmail || "No email provided"}
              </p>
              <span className="inline-block mt-1 text-xs md:text-sm text-blue-400 font-medium uppercase tracking-wide">
                Property Owner
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Review Form */}
      <ReviewForm property={property} />

      {/* Reviews */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>
        {Array.isArray(reviews) && reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((r) => (
              <div
                key={r._id}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={r.reviewerImage}
                    alt={r.userName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{r.reviewerName}</h4>
                    <span className="text-sm text-gray-500">
                      {new Date(r.reviewDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p>{r.review}</p>
                <div className="text-yellow-400">
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={currentImage}
            alt="Enlarged Property"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
