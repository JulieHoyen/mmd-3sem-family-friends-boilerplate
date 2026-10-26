import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/BottomNav";
import FavoriteButton from "@/app/components/FavoriteButton";
import TraitBadge from "@/app/components/TraitBadge";
import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const DetailView = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.THEDOG_API_KEY,
      },
    }
  );

  if (response.status === 404) {
    notFound();
  }

if (!response.ok) {
  throw new Error("Kunne ikke hente hunderacen")

}

const breed = await response.json();

  return (
    <main className="flex flex-col">
      <Header />

      <article className="flex flex-col gap-4 px-4 py-4">
        <div className="relative">
          <Image src={breed.image?.url || "/dummydog.jpg"} width={100} height={100} alt={breed.name} className=" w-full aspect-square object-cover object-center rounded-3xl " />
        
<Link
  href="/"
  aria-label="Back to ListView"
  className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900">

  <FiChevronLeft className="text-2xl" />


</Link>
          <div className="absolute top-4 right-4">
            <FavoriteButton isFavorite={breed.isFavorite} />
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-gray-700">{breed.name}</h1>
          <TraitBadge temperament={breed.temperament} />
        <section>
          <div className="py-3">
            <p className="text-gray-400 text-sm">Breed description</p>
          <p className="text-gray-600">{breed.description}</p>
          </div>
          <div className="py-3">
            <p className="text-gray-400 text-sm">Breed history</p>
          <p className="text-gray-600 ">{breed.history}</p>
          </div>


          <div className="py-3">
            <p className="text-gray-400 text-sm">Breed group</p>
          <p className="text-gray-600 ">{breed.breed_group}</p>
          </div>

<div className="py-3">
            <p className="text-gray-400 text-sm">Aternativ names</p>
          <p className="text-gray-600 ">{breed.alt_names}</p>
          </div>

<div className="py-3">
            <p className="text-gray-400 text-sm">Origin</p>
          <p className="text-gray-600 ">{breed.origin}</p>
          </div>


<div className="py-3">
            <p className="text-gray-400 text-sm">Weight</p>
          <p className="text-gray-600 ">{breed.weight.metric}</p>
          </div>

<div className="py-3">
            <p className="text-gray-400 text-sm">Height</p>
          <p className="text-gray-600 ">{breed.height.metric}</p>
          </div>

      
        </section>
      </article>

      <BottomNav />
    </main>
  );
};

export default DetailView;
