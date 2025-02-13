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
    <div className="w-[430px] mx-auto">
      {/* top line  */}
      <div className="flex justify-between mt-4">
        <div className="flex justify-start gap-1.5">
          <IoReorderThreeOutline className="text-2xl" />
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-start gap-1.5 text-2xl ">
          <IoIosNotificationsOutline />
          <CiSearch />
        </div>
      </div>
      {/* navigation button  */}
      <div className="flex justify-between mt-2 gap-1.5 text-2xl ">
        <button className="flex items-center justify-center mx-auto bg-[#F6F6F6] w-full rounded-[8px] py-2 border-b-2 border-[#2131F0] ">
          <IoNewspaperOutline className="rounded-[86.667px] bg-gradient-to-br from-[#2131F0] to-[#0A82FE] text-lg text-white p-1 " />
        </button>
        <button className="flex items-center justify-center mx-auto w-full rounded-2xl py-2">
          <IoFlameOutline />
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <AiOutlineShop />
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <TbSpeakerphone />
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <HiOutlineUser />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
