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
    <div className="w-[430px] md:w-[771px] xl:w-[1772px] mx-auto md:px-1 md:py-2 xl:h-16">
      {/* top line  */}
      <div className="flex justify-between mt-4 ">
        {/* top left  */}
        <div className="flex justify-start w-[140px] border border-red-500 gap-1.5">
          <IoReorderThreeOutline className="text-2xl xl:hidden" />
          <img
            className="w-[100px] h-[30px] md:w-[80px] xl:w-[181px] xl:h-14 "
            src={logo}
            alt=""
          />
        </div>

        {/* top right  */}
        <div className="flex justify-start gap-1.5 text-2xl relative xl:w-[412px] border border-amber-500 ">
          {/* search icon  */}
          <CiSearch className="text-2xl xl:absolute xl:left-3 xl:top-3 " />
          <input
            className="hidden xl:block placeholder:text-[#939393] placeholder:text-lg px-4 rounded-[56px] pl-16 border border-[#D2D2D2] "
            type="text"
            name=""
            id=""
            placeholder="search"
          />
          <IoIosNotificationsOutline className=" text-2xl xl:text-[32px] text-[#161616] xl:mt-3 " />
        </div>
      </div>

      {/* navigation button  */}
      <div className="flex justify-between mt-2 gap-1 top-2 w-full md:hidden ">
        {/* news button  */}
        <button className="flex items-center justify-center mx-auto bg-[#F6F6F6] w-[80px] h-12 rounded-[8px] py-2  border-b-2 border-[#2131F0] ">
          <IoNewspaperOutline className="rounded-[86.667px] bg-gradient-to-br from-[#2131F0] to-[#0A82FE] text-lg text-white p-1 mt-1 " />
        </button>

        {/* trading button  */}
        <button className="flex items-center justify-center mx-auto w-[80px] hover:cursor-pointer hover:bg-gray-50 rounded-2xl py-2 h-12">
          <IoFlameOutline className="text-2xl md:text-lg" />
        </button>

        {/*  restaurant button */}
        <button className="flex items-center justify-center mx-auto w-[80px] hover:cursor-pointer hover:bg-gray-50 rounded-2xl py-2 h-12">
          <AiOutlineShop className="text-2xl md:text-lg" />
        </button>

        {/* event button  */}
        <button className="flex items-center justify-center mx-auto w-[80px] hover:cursor-pointer hover:bg-gray-50 rounded-2xl py-2 h-12">
          <TbSpeakerphone className="text-2xl md:text-lg" />
        </button>

        {/* Profile button  */}
        <button className="flex items-center justify-center mx-auto w-[80px] hover:cursor-pointer hover:bg-gray-50 rounded-2xl py-2 h-12">
          <HiOutlineUser className="text-2xl md:text-lg" />
        </button>
      </div>

      {/* navigation button  */}
      {/* <div className="flex justify-between mt-2 gap-1  md:absolute md:left-1/2 md:-translate-x-1/2 md:w-[530px]  top-2 xl:top-4 xl:mr-3 ">
        <button className="flex items-center justify-center mx-auto bg-[#F6F6F6] w-[80px] h-12 md:w-[65px] xl:w-[165px] rounded-[8px] pyh-12 d:py-0 border-b-2 xl:border-0 border-[#2131F0] md:flex-col md:justify-start md:h-12 ">
          <IoNewspaperOutline className="rounded-[86.667px] bg-gradient-to-br from-[#2131F0] to-[#0A82FE] text-lg text-white p-1 mt-1 " />
          <h2 className="hidden md:block text-base text-[#161616] ">Feed</h2>
        </button>

        <button className="flex items-center justify-center mx-auto w-[80px] h-12 md:w-[65px] xl:w-[165px] rounded-2xl py-2h-12 py-0 md:flex-col md:h-12  ">
          <IoFlameOutline className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Trading</h2>
        </button>

        <button className="flex items-center justify-center mx-auto w-[80px] h-12 md:w-[65px] xl:w-[165px] py-2 md:py-0 md:h-12  md:flex-col">
          <AiOutlineShop className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">
            Restaurant
          </h2>
        </button>

        <button className="flex items-center justify-center mx-auto w-[80px] h-12 md:w-[65px] xl:w-[165px] py-2 md:py-0 md:h-12  md:flex-col">
          <TbSpeakerphone className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Event</h2>
        </button>

        <button className="flex items-center justify-center mx-auto w-[80px] h-12 md:w-[65px] xl:w-[165px] py-2 md:py-0 md:h-12  md:flex-col">
          <HiOutlineUser className="text-2xl md:text-lg" />
          <h2 className="hidden md:block text-base text-[#585858] ">Profile</h2>
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
