import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import { MapPin, User, CalendarDays, Star } from "lucide-react";
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
    fetch(`http://localhost:5000/propertyDetails/${id}`)
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
        <div className="p-6">
          {/* Title */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold mb-2 text-base-content">
              {property.propertyName}
            </h2>
            <div
              className="flex items-center font-semibold text-sm text-primary cursor-pointer hover:underline"
              onClick={()=>navigate(-1)}
            >
              <IoMdArrowRoundBack />
              <button>Previous</button>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-4 text-base-content/70">
            <span className="flex items-center">
              <MapPin size={16} className="mr-1 text-primary" />
              {property.area}, {property.city}
            </span>
            <span className="flex items-center">
              <CalendarDays size={16} className="mr-1 text-primary" />
              {new Date(property.postedDate).toLocaleDateString()}
            </span>
            {property?.postedBy && (
              <span className="flex items-center">
                <User size={16} className="mr-1 text-primary" />
                {property.postedBy.name} ({property.postedBy.email})
              </span>
            )}
          </div>

          {/* Description */}
          <p className="leading-relaxed mb-5 text-base-content/90">
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

      {/* Ratings & Reviews Section */}
            <ReviewForm property={property}></ReviewForm>

      {/* /// */}
    </div>
  );
};

export default PropertyDetails;
