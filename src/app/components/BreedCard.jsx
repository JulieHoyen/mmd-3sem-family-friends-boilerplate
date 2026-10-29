import Image from "next/image";
import Link from "next/link";
import Favorite from "./Favorite";

const BreedCard = ({ id, image, imageId, name, origin, isFavorite = false, favoriteId }) => {
  return (
    <article className="breed-card">
      <div className="relative">
        <Link href={`/detailview/${id}`}>
          <Image src={image} width={400} height={400} alt={name} className="w-full aspect-square object-cover object-top  rounded-xl" />
        </Link>

        <div className="absolute top-2 right-2">{imageId && <Favorite id={imageId} breed={name} isFavorite={isFavorite} favoriteId={favoriteId} />}</div>
      </div>

      <Link href={`/detailview/${id}`}>
        <div className="p-2">
          <h2 className="text-sm font-semibold text-gray-900">{name}</h2>
          <p className="text-xs text-gray-400">{origin}</p>
        </div>
      </Link>
    </article>
  );
};

export default BreedCard;
