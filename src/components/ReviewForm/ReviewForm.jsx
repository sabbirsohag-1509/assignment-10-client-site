import React, { useContext, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ReviewForm = ({ property }) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const navigate = useNavigate(); 

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      propertyName: property.propertyName,
      propertyImage: property.imageURL,
      propertyId: property._id,
      reviewerName: user?.displayName,
      reviewerEmail: user?.email,
      reviewerImage: user?.photoURL,
      rating,
      review: reviewText,
      reviewDate: new Date().toISOString(),
    };
    console.log("Submitting review:", reviewData);
    try {
      const res = await axios.post("http://localhost:5000/review", reviewData);
      console.log("Review submitted:", res.data);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Review submitted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
        navigate("/my-ratings");
      // Reset form
      setRating(0);
      setReviewText("");
    } catch (error) {
      console.error(
        "Error submitting review:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="mt-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
      <h4 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
        Write a Review
      </h4>

      <form onSubmit={handleReviewSubmit} className="space-y-4">
        {/* Star Rating */}
        <div className="flex flex-col items-center space-y-2">
          <label className="text-gray-700 dark:text-gray-300 font-medium">
            Your Rating:
          </label>
          <Rating
            style={{ maxWidth: 150 }}
            value={rating}
            onChange={setRating}
            itemStyles={{
              itemShapes: Star,
              activeFillColor: "#f59e0b",
              inactiveFillColor: "#78350f",
            }}
          />
        </div>

        {/* Review Text */}
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
          placeholder="Write your review..."
          className="textarea textarea-bordered w-full h-24 text-sm dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 transition-all duration-300"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
