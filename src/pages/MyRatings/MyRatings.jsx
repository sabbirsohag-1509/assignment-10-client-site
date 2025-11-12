import React, { use, useEffect, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Context-Provider/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const MyRatings = () => {
  const { user } = use(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/review/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [user]);

    const handleDeleteReview = async (reviewId) => {
  // 1. Confirm dialog (optional but recommended)
  const confirm = await Swal.fire({
    title: "Are you sure?",
    text: "This review will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2563eb",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Yes, delete it!",
  });

  if (!confirm.isConfirmed) return; // যদি cancel করে, exit

  try {
    // 2. Send DELETE request to your API
    const res = await axios.delete(`http://localhost:5000/review/${reviewId}`);

    // 3. Update state
    if (res.data.deletedCount > 0) {
      setReviews((prev) => prev.filter((r) => r._id !== reviewId));
      Swal.fire({
        icon: "success",
        title: "Review Deleted!",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: error.message,
    });
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-10 px-3 sm:px-6 lg:px-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
        My Ratings & Reviews
      </h1>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          You haven’t posted any reviews yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Property Image */}
              <div className="relative">
                <img
                  src={review.propertyImage}
                  alt={review.propertyName}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Property Name (modern badge design) */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                  {review.propertyName}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-5 flex-1">
                {/* Reviewer Info & Delete */}
                <div className="flex justify-between items-center mb-3 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        review.reviewerImage ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt={review.reviewerName}
                      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                        {review.reviewerName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(review.reviewDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>handleDeleteReview(review._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-md shadow transition-all duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={review.rating}
                    readOnly
                    itemStyles={{
                      itemShapes: Star,
                      activeFillColor: "#eab308", // deep gold
                      inactiveFillColor: "#78350f", // dark brownish-gold
                    }}
                  />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-3">
                  {review.review?.length > 120
                    ? review.review.slice(0, 120) + "..."
                    : review.review}
                </p>

                {/* Footer */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-auto pt-3 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <p className="italic">
                    Reviewed on{" "}
                    {new Date(review.reviewDate).toLocaleDateString()}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    ★ {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
