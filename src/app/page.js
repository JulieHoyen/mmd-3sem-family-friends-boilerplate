import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BottomNav from "./components/BottomNav";
import BreedCard from "./components/BreedCard";
import { breeds } from "@/data/breeds";


export default async function ListView({ searchParams }) {
  const { query } = await searchParams;
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";

const headers = {
  "x-api-key": process.env.THEDOG_API_KEY,
};

const [dogsResponse, favoritesResponse] = await Promise.all([
  fetch(url, { headers }),

  fetch("https://api.thedogapi.com/v1/favourites?limit=100&page=0", {
    headers,
    cache: "no-store",
  }),
]);



  fetch("https://api.thedogapi.com/v1/favourites?limit=100&page=0", {
  headers,
  cache: "no-store",
})


  if (!dogsResponse.ok || !favoritesResponse.ok) {
    throw Error("Kunne ikke hente hunde eller favoritter");
  }

  const [dogs, favorites] = await Promise.all([dogsResponse.json(), favoritesResponse.json()]);



  return (
    <main>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
    
        <SearchBar searchParams={searchParams} />

        <section className="grid grid-cols-2 gap-3 px-4 py-4">
          {dogs.map((dog) => (
            <BreedCard
              key={dog.id}
              id={dog.id}
              image={dog.image?.url || "/dummydog.jpg"}
              imageId={dog.image?.id}
              name={dog.name}
              origin={dog.origin}

              isFavorite={favorites.some((favorite) => favorite.image_id === dog.image?.id)}
              favoriteId={favorites.find((favorite) => favorite.image_id === dog.image?.id)?.id}
            />
          ))}
        </section>

        <h2>ListView</h2>
        <Link href="/detailview">Go to DetailView</Link>

        <BottomNav className="mx-auto min-h-screen max-w-[800]" />
      </div>
    </main>
  );
}
