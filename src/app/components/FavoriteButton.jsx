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

// "use client";
// // Importer CSS filen
// import "../component-style/like-counter-exercise.css";
// import { useState } from "react";

// export default function LikeCounterExercise() {
//   // TODO for studerende: Opret state variabler

//   const [likes, setLikes] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   // TODO for studerende: Implementer handleLike funktionen
//   function handleLiked() {
//     if (isLiked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }

//     setIsLiked(!isLiked);
//   }

//     return (
//   <div className="like-section">
//           <button
//             // TODO for studerende: Tilføj liked class hvis isLiked er true
//             className={`like-button ${isLiked ? "liked" : ""}`}
//             onClick={handleLiked}
//           >
//             <span className="heart-icon">{isLiked ? "❤️" : "🤍"}</span>
//             {isLiked ? "Liked" : "Like"}

//           </button>
// </div>
//             );
// }
