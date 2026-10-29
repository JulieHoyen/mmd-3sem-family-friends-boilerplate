"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { addFavorite, removeFavorite } from "@/app/actions/actions";

const Favorite = ({ id, breed, isFavorite = false, favoriteId }) => {
  const router = useRouter();

  const [favorite, setFavorite] = useState(isFavorite);
  const [savedFavoriteId, setSavedFavoriteId] = useState(favoriteId);
  const [pending, setPending] = useState(false);


  useEffect(() => {
    setFavorite(isFavorite);
    setSavedFavoriteId(favoriteId);
  }, [isFavorite, favoriteId]);

  const handleFavorite = async () => {
    if (pending) return;

    setPending(true);

    try {
      if (favorite) {
        if (!savedFavoriteId) {
          throw new Error("Mangler favorit-ID");
        }

        await removeFavorite(savedFavoriteId);
        setFavorite(false);
        setSavedFavoriteId(undefined);
      } else {
        const result = await addFavorite(id);
        setFavorite(true);
        setSavedFavoriteId(result.id);
      }

      router.refresh();
    } catch (error) {
      console.error("Favoritfejl:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <button type="button" onClick={handleFavorite} disabled={pending} aria-pressed={favorite} aria-label={favorite ? `Remove ${breed || "dog"} from favorites` : `Add ${breed || "dog"} to favorites`} className="rounded-full bg-white/30 p-2 text-white cursor-pointer">
      {favorite ? <FaStar /> : <FaRegStar />}
    </button>
  );
};

export default Favorite;
