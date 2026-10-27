import Logo from "./Logo";
import { LuBell } from "react-icons/lu";
import { IoIosWifi } from "react-icons/io";
import { BiSignal4 } from "react-icons/bi";
import { IoIosBatteryFull } from "react-icons/io";


const Header = () => {
  return (
    <header className="rounded-full">
      <section className="flex justify-between bg-white px-4 py-5 rounded-full">
        <h4 className="font-semibold text-lg px-7 py-1">9:41</h4>

        <div className="flex items-center">
          <BiSignal4 className="w-6 h-6" />
          <IoIosWifi className="w-6 h-5" />
          <IoIosBatteryFull className="w-6 h-6" />
        </div>
      </section>
      <div className="flex items-center justify-between ">
        <Logo />
        <button type="button" aria-label="Notifications" className="relative pe-3">
          <LuBell className="text-3xl text-gray-900 animate-wiggle" />
          <span className="absolute top-0 right-4 h-2 w-2 rounded-full bg-[#f39494] animate-ping- outline-2 outline-white " />
          
        </button>
      </div>
    </header>
  );
};

export default Header;
