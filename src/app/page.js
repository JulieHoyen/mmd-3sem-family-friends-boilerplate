// import Link from "next/link";
// import Logo from "./components/Logo";
// import Header from "@components/Header";
// import BottomNav from "@/components/BottonNav";
// import BreedCard from "@components/BreedCard";

import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BottomNav from "./components/BottomNav";

import BreedCard from "./components/BreedCard";
import { breeds } from "@/data/breeds";

export default async function ListView() {

const response = await fetch ("https://api.thedogapi.com/v1/breeds", {
  headers: {
    "x-api-key": process.env.THEDOG_API_KEY,
  },
});


if (!response.ok) {
  throw new Error("Kunne ikke hente hunderacer fra TheDogAPI. Prøv igen når du ikke sidder i regional toget med dårlig internet forbindselse");
}

const dogs = await response.json();

console.log(dogs.slice(0, 3));


  return (
    <main>
     <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <SearchBar />

        <section className="grid grid-cols-2 gap-3 px-4 py-4">

    {dogs.map((dog) => (
  <BreedCard
    key={dog.id}
    id={dog.id}
    image={dog.image?.url || "/dummydog.jpg"}
    name={dog.name}
    origin={dog.origin || "Unknown"}
    isFavorite={false}
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
