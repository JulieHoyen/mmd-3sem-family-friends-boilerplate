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
