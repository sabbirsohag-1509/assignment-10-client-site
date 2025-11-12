import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { MapPin, User, CalendarDays } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { Helmet } from "react-helmet-async";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://home-nest-gamma.vercel.app/propertyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <Helmet>
        <title>{property.propertyName} - HomeNest</title>
      </Helmet>

      {/* Property Card */}
      <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden border border-base-300">
        {/* Image Section */}
        <img
          src={property.imageURL}
          alt={property.propertyName}
          className="w-full h-[420px] object-cover"
        />

        {/* Info Section */}
        <div className="p-6 space-y-5">
          {/* Title + Back Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-base-content">
              {property.propertyName}
            </h2>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline transition-colors"
            >
              <IoMdArrowRoundBack className="text-lg" />
              Go Back
            </button>
          </div>

          {/* Location + Date */}
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

          {/* Owner Info */}
          {(property?.userName || property?.userEmail) && (
            <div className="mt-4 bg-base-200 dark:bg-gray-800 rounded-xl p-5 flex items-center gap-4 border border-base-300 shadow-sm">
              <img
                src={
                  property?.photoUrl ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={property?.userName}
                className="w-16 h-16 rounded-full border border-base-300 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-base-content">
                  {property?.userName || "Unknown User"}
                </h3>
                <p className="text-sm text-base-content/70">
                  {property?.userEmail || "No email provided"}
                </p>
                <p className="text-xs text-base-content/50 italic">
                  Property Owner
                </p>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="leading-relaxed text-base-content/90">
            {property.description}
          </p>

          {/* Price & Category */}
          <div className="flex justify-between items-center border-t border-base-300 pt-4">
            <p className="text-xl font-semibold text-primary flex items-center">
              <TbCurrencyTaka size={22} />
              {property.price.toLocaleString()}/=
            </p>
            <span className="badge badge-primary badge-outline px-3 py-3 font-semibold">
              {property.category}
            </span>
          </div>
        </div>
      </div>

      {/*Ratings & Reviews Section*/}
      <div className="mt-10">
        <ReviewForm property={property} />
      </div>
    </div>
  );
};

export default PropertyDetails;
