import { FiSearch } from "react-icons/fi";
import Form from "next/form";

const SearchBar = async () => {
  return (
    <Form className="flex items-center gap-3 px-4 py-4 sticky">
      <button type="submit" aria-label="Search breeds" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f39494] text-white">
        <FiSearch className="text-2xl -scale-x-100" />
      </button>

      <input type="search" name="query" placeholder="Search breeds" aria-label="Search dog breeds" className="min-w-0 flex-1 border-2 border-gray-300 rounded-full px-5 py-3 text-gray-900 placeholder:text-gray-300" />
    </Form>
  );
};

export default SearchBar;

// export default Home ({ searchParams }) => {
//   "use server";
//   const { query } = await searchParams;
// const url = query

// ? `"https://api.thedogapi.com/v1/breeds/search?q=terrier"`
// : "https://api.thedogapi.com/v1/breeds";

// try {
//   const response = await fetch (url, {

//     headers: {
// "x-api-key": process.env.API_KEY,

//     },
//   )};

// }

// return (

// <form className="flex items-center gap-3 px-4 py-4 sticky">
//     <button type="button" aria-label="Search breeds"
//     className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f39494] text-white" >
// <FiSearch className="text-2xl -scale-x-100"/>

// </button>

// <input
// type="seatch"

// placeholder="Search breeds"
// aria-label="Search dog breeds"
// className="min-w-0 flex-1 border-2 border-gray-300 rounded-full px-5 py-3 text-gray-900 placeholder:text-gray-300"

// />

// </form>
//   );
// };

// export default SearchBar;
