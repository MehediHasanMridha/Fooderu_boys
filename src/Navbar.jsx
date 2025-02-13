import { AiOutlineShop } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  IoFlameOutline,
  IoNewspaperOutline,
  IoReorderThreeOutline,
} from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";

import logo from "./assets/Logo (2).png";
// icon part here

const Navbar = () => {
  return (
    <div className="w-[430px] md:w-[771px] lg:max-w-[1772px] mx-auto md:px-1 md:py-2  md:relative">
      {/* top line  */}
      <div className="flex justify-between mt-4">
        <div className="flex justify-start gap-1.5">
          <IoReorderThreeOutline className="text-2xl lg:hidden" />
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-start gap-1.5 text-2xl ">
          <IoIosNotificationsOutline />
          <CiSearch />
        </div>
      </div>

      {/* navigation button  */}
      <div className="flex justify-between mt-2 gap-1  md:absolute md:left-1/2 md:-translate-x-1/2 md:w-[558px] lg:w-[848px] top-2 ml-4 md:h ">
        {/* news button  */}
        <button className="flex items-center justify-center mx-auto bg-[#F6F6F6] w-full rounded-[8px] py-2 md:py-0 border-b-2 border-[#2131F0] md:flex-col md:justify-start md:h-12 ">
          <IoNewspaperOutline className="rounded-[86.667px] bg-gradient-to-br from-[#2131F0] to-[#0A82FE] text-lg text-white p-1 mt-1 " />
          <h2 className="hidden md:block text-base text-[#161616] ">Feed</h2>
        </button>

        {/* trading button  */}
        <button className="flex items-center justify-center mx-auto w-full rounded-2xl py-2 md:py-0 md:flex-col md:h-12  ">
          <IoFlameOutline className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Trading</h2>
        </button>

        {/*  restaurant button */}
        <button className="flex items-center justify-center mx-auto w-full py-2 md:py-0 md:h-12 md:flex-col">
          <AiOutlineShop className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">
            Restaurant
          </h2>
        </button>

        {/* event button  */}
        <button className="flex items-center justify-center mx-auto w-full py-2 md:py-0 md:h-12 md:flex-col">
          <TbSpeakerphone className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Event</h2>
        </button>

        {/* Profile button  */}
        <button className="flex items-center justify-center mx-auto w-full py-2 md:py-0 md:h-12 md:flex-col">
          <HiOutlineUser className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Profile</h2>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
