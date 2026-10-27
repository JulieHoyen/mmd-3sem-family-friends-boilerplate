import { FiHome } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";

const BottomNav = () => {
  return (
    <footer className="flex  flex-row justify-between gap-20 py-2 text-[#ACACAC] mx-auto min-h-2 max-w-[800] bg-gray-50 rounded-full">
      
      <FiHome className="w-10 h-10 text-[#f39494] "/>
      <FaRegStar className="w-10 h-10" />
      <IoChatbubbleOutline className="w-10 h-10" />
      <RxPerson className="w-10 h-10"/>
    </footer>
  );
};

export default BottomNav;
