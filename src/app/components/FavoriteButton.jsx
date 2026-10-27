"use client";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const FavoriteButton = ({ isFavorite = false }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (


    
    <button type="button" onClick={handleFavorite} aria-pressed={favorite} aria-label={favorite ? "Remove from favorites" : "Add to favorites"} className="rounded-full bg-white/30 p-2 text-white cursor-pointer">
      {favorite ? <FaStar /> : <FaRegStar />}
    </button>
  );
};

export default FavoriteButton;

