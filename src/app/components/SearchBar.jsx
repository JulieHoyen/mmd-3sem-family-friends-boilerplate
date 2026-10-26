import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
<form className="flex items-center gap-3 px-4 py-4 sticky">
    <button type="button" aria-label="Search breeds"
    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f39494] text-white" >
<FiSearch className="text-2xl -scale-x-100"/>

</button>

<input
type="seatch"
placeholder="Search breeds"
aria-label="Search dog breeds"
className="min-w-0 flex-1 border-2 border-gray-300 rounded-full px-5 py-3 text-gray-900 placeholder:text-gray-300"

/>

</form>
  );
};

export default SearchBar;

