import React from "react";

const CoffeeCard = ({ image, location, cost, item, rating }) => {
  const renderStars = (rating) => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const starClassName = i <= rating ? "text-yellow-500" : "text-gray-300"; //  color based on rating
      stars.push(
        <span key={i} className={`text-2xl mx-1 ${starClassName}`}>
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 mb-4">
      <img src={image} alt="Coffee" className="w-full h-auto rounded-md mb-2" />
      <div className="font-semibold mt-2">☕ {item}</div>
      <div className="font-semibold mt-2">📍 {location}</div>
      <div className="dark:text-green-500 text-green-600 font-semibold mt-2">
        💵 {cost}
      </div>
      <div className="mt-2">{renderStars(rating)}</div>
    </div>
  );
};

export default CoffeeCard;
