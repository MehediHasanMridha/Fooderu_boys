import { FaBars, FaBell, FaSearch } from "react-icons/fa";

import banner from "../../assets/Banner.png";
import cross from "../../assets/cross.svg";
import dot from "../../assets/dot.svg";
import ellipse1 from "../../assets/Ellipse 1.svg";
import frame2 from "../../assets/Frame (2).svg";
import frame3 from "../../assets/Frame (3).svg";
import frame4 from "../../assets/Frame (4).svg";
import frame5 from "../../assets/Frame (5).svg";
import icon1 from "../../assets/icon-1.svg";
import icon2 from "../../assets/icon-2.svg";
import icon3 from "../../assets/icon-3.svg";
import icon4 from "../../assets/icon-4.svg";
import icon5 from "../../assets/icon-5.svg";
import logo from "../../assets/Logo.png";
import post1Banner from "../../assets/post-1-banner.png";
import profile1 from "../../assets/profile-1.jpeg";
import profile2 from "../../assets/profile-2.jpeg";

const UserProfile = () => {
  return (
    <div className="container mx-auto bg-white">
      {/* Header Section */}

      {/* TODO: Responsive */}
      {/* upper part */}
      <div className="py-2 px-6 flex flex-row justify-between items-center">
        <div className="flex gap-1 items-center">
          <FaBars />
          <img className="w-24" src={logo} alt="logo" />
        </div>
        <div className="flex gap-1 items-center">
          <FaSearch />
          <FaBell />
        </div>
      </div>

      {/* TODO: Responsive */}
      {/* lower part */}
      <div className="flex justify-center items-center">
        <img className="w-20 " src={icon1} alt="" />
        <img className="w-20" src={icon2} alt="" />
        <img className="w-20" src={icon3} alt="" />
        <img className="w-20" src={icon4} alt="" />
        <img className="w-20" src={icon5} alt="" />
      </div>

      {/* Banner part */}

      <div>
        {/* Upper part TODO: Responsive */}
        <div className="relative">
          <img className="w-full" src={banner} alt="Banner" />
          <div className="absolute left-6 top-16">
            <img
              className="w-24 h-24 border-4 border-solid rounded-full border-white"
              src={profile1}
              alt=""
            />
          </div>
        </div>

        {/* Middle part TODO: Responsive */}
        <div className="mt-16 pl-6">
          <p className="font-custom-Inter font-medium">Abdullah Al Mahmud</p>
          <p className="text-[#585858] text-sm font-custom-Inter">
            @abdullah_1608
          </p>
          <div className="flex">
            <div className="w-6 h-6 border-2 rounded-full border-white -ml-2"></div>
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile1}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile2}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile1}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile2}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile1}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile2}
              alt=""
            />
            <img
              className="w-6 h-6 border-2 rounded-full border-white -ml-2"
              src={profile1}
              alt=""
            />
            <div className="w-6 h-6 border-2 rounded-full border-white -ml-2"></div>
            <div className="w-6 h-6 border-2 rounded-full border-white -ml-2"></div>
          </div>
        </div>

        {/* lower part TODO: Responsive */}
        <div className="flex items-center gap-2 mt-4 pl-6">
          <button className="text-sm text-white font-custom-Inter font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00]">
            Create a restaurant
          </button>
          <button className="text-sm font-custom-Inter font-medium py-2 px-3 bg-[#F7F7F7] rounded-full">
            Edit Profile
          </button>
          <button className="py-2 px-3 bg-[#F7F7F7]">
            <img src={dot} alt="" />
          </button>
        </div>

        {/* TODO: Responsive */}
        <div className="w-[382px] border border-solid border-[#D2D2D2] mt-2 mb-3 ml-6"></div>

        {/* TODO: Responsive */}
        <div className="flex gap-4 items-center px-6">
          <button className="button active:border-b-2 active:border-[#FFB800] p-1 text-[#161616] font-custom-Inter text-xs ">
            Saved
          </button>
          <button className="button active:border-b-2 active:border-[#FFB800] p-1 text-[#161616] font-custom-Inter text-xs ">
            Favorite
          </button>
          <button className="button active:border-b-2 active:border-[#FFB800] p-1 text-[#161616] font-custom-Inter text-xs ">
            Reviewed
          </button>
          <button className="button active:border-b-2 active:border-[#FFB800] p-1 text-[#161616] font-custom-Inter text-xs ">
            Commented
          </button>
        </div>
      </div>

      {/* Information part TODO: Responsive */}
      <div className="my-2">
        <div className="py-4 px-6">
          <h3 className="text-[#585858] font-custom-Inter text-sm">
            Personal information
          </h3>
          <div className="w-[382px] border border-solid border-[#D2D2D2] mt-2"></div>
          <div className="flex gap-2 items-center justify-start pt-4">
            <div>
              <img src={frame3} alt="" />
            </div>
            <div className="text-base font-custom-Inter">Dhaka, Bangladesh</div>
          </div>
          <div className="flex gap-2 items-center justify-start pt-4">
            <div>
              <img src={frame2} alt="" />
            </div>
            <div className="text-base font-custom-Inter">
              1989 1234 5763 4565
            </div>
          </div>
          <div className="flex gap-2 items-center justify-start pt-4">
            <div>
              <img src={frame4} alt="" />
            </div>
            <div className="text-base font-custom-Inter">+880 1712-345 678</div>
          </div>
          <div className="flex gap-2 items-center justify-start pt-4">
            <div>
              <img src={frame5} alt="" />
            </div>
            <div className="text-base font-custom-Inter">
              habibur123@gmal.com
            </div>
          </div>
          <div className="flex gap-2 items-center justify-start pt-4">
            <div>
              <img src={frame3} alt="" />
            </div>
            <div className="text-base font-custom-Inter">RC67+42J, Dhaka</div>
          </div>
        </div>
      </div>

      {/* General Post TODO: Responsive */}
      <div className="mt-6 space-y-2">
        {/* post-1 TODO: Responsive */}
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center justify-start">
              <div>
                <img className="w-12 h-12 rounded-full" src={ellipse1} alt="" />
              </div>
              <div>
                <p className="font-custom-Inter font-medium">Hakim Badshah</p>
                <div className="flex gap-1 items-center">
                  <p className="text-xs text-[#585858] font-custom-Inter">
                    2:30
                  </p>
                  <div className="border h-3 border-solid border-[#D2D2D2]"></div>
                  <p className="text-xs text-[#585858] font-custom-Inter">
                    23 Apr 2024
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button className="text-sm text-white font-custom-Inter font-medium py-2 px-3 rounded-full bg-gradient-to-r from-[#FFB800] to-[#FF7A00]">
                Follow
              </button>
              <button className="py-2 px-3 bg-[#F7F7F7]">
                <img src={dot} alt="" />
              </button>
              <button className="">
                <img src={cross} alt="" />
              </button>
            </div>
          </div>
          <p className="py-2 text-sm font-custom-Inter">
            Chicken biryani is a quintessential South Asian dish known for its
            rich flavors and
            <span className="text-[#585858]">... more</span>
          </p>
          <div>
            <img className="w-full rounded" src={post1Banner} alt="" />
            <div className="pt-2 flex items-center">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
