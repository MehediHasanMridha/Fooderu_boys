import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/Frame 8.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-16 w-[1690px] mx-auto">
      <div className="logo">
        <img className="w-[202px] h-[54px]" src={Logo} alt="" />
      </div>
      <div className="navlink py-4 px-1 *:px-4 bg-gray-100 rounded-[28px]">
        <a className="bg-[#040633] py-3 px-4 text-white rounded-3xl" href="#">
          Services
        </a>
        <a href="#" className="py-5">
          Our Project
        </a>
        <a href="#" className="py-5">
          About Us
        </a>
        <a href="#" className="py-5">
          Blog
        </a>
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center border bg-[#852EFF] text-white py-5 px-5 rounded-4xl gap-1.5 cursor-pointer">
          <FaPlus></FaPlus> Become a Client
        </button>
        <button className="flex items-center gap-1.5 bg-[#F2F4F7]  py-5 pr-4 pl-5 rounded-2xl">
          ENG <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Header;
