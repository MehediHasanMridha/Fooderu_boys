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

import logo from '../../public/Image/Logo (2).png'
// icon part here

const Navbar = () => {
  return (
    <div className="w-[430px] md:w-[771px] xl:w-[1720px] mx-auto md:px-1 md:py-2 xl:h-16">
      {/* top line  */}
      <div className="flex justify-between mt-4 gap-6 ">
        {/* top left  */}
        <div className="flex justify-start w-[140px] md:w-[132px] xl:w-[392px] items-center  gap-1.5">
          <IoReorderThreeOutline className="text-2xl xl:hidden" />
          <img
            className="w-[100px] h-[30px] md:w-[95px] xl:w-[181px] xl:mx-auto xl:h-14 "
            src={logo}
            alt=""
          />
        </div>

        {/* top middle  */}
        <div className="hidden md:block w-[358px] xl:w-[848px] ">
          <div className="w-full flex gap-2">
            {/* feed  */}
            <button className="w-[65.8px] 2xl:w-[163px] h-10 2xl:h-14 flex justify-center items-center flex-col hover:cursor-pointer bg-[#F6F6F6] rounded-3xl ">
              <IoNewspaperOutline className="rounded-[86.667px] bg-gradient-to-br from-[#2131F0] to-[#0A82FE] text-lg text-white p-1 mt-1 " />
              <h2 className="text-xs xl:text-lg text-[#161616] ">Feed</h2>
            </button>

            {/* trading  */}
            <button className="w-[65.8px] 2xl:w-[163px] h-10 2xl:h-14 flex justify-center items-center flex-col hover:cursor-pointer hover:bg-gray-50 ">
              <IoFlameOutline className="text-lg" />
              <h2 className="text-xs xl:text-lg text-[#585858] ">Trading</h2>
            </button>

            {/* restaurant  */}
            <button className="w-[65.8px] 2xl:w-[163px] h-10 2xl:h-14 flex justify-center items-center flex-col hover:cursor-pointer hover:bg-gray-50 ">
              <AiOutlineShop className="md:text-lg" />
              <h2 className="text-xs xl:text-lg text-[#585858] ">Restaurant</h2>
            </button>

            {/* event  */}
            <button className="w-[65.8px] 2xl:w-[163px] h-10 2xl:h-14 flex justify-center items-center flex-col hover:cursor-pointer hover:bg-gray-50 ">
              <TbSpeakerphone className="md:text-lg" />
              <h2 className="text-xs xl:text-lg text-[#585858] ">Event</h2>
            </button>

            {/* Profile  */}
            <button className="w-[65.8px] 2xl:w-[163px] h-10 2xl:h-14 flex justify-center items-center flex-col hover:cursor-pointer hover:bg-gray-50  ">
              <HiOutlineUser className="text-lg" />
              <h2 className="text-xs xl:text-lg text-[#585858] ">Profile</h2>
            </button>
          </div>
        </div>

        {/* top right  */}
        <div className="flex justify-start items-center gap-1.5 text-2xl relative xl:w-[412px]">
          {/* search icon  */}
          <CiSearch className="text-2xl xl:absolute xl:left-3 xl:top-4 " />
          <input
            className="hidden xl:block placeholder:text-[#939393] placeholder:text-lg px-4 py-2 h-14 rounded-[56px] pl-16 border border-[#D2D2D2] "
            type="text"
            name=""
            id=""
            placeholder="search"
          />
          <IoIosNotificationsOutline className=" text-2xl xl:text-[32px] text-[#161616] xl:mt-3 my-auto " />
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
    </div>
  );
};

export default Navbar;