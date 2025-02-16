import { BsThreeDots } from "react-icons/bs";
import {
  FaCommentDots,
  FaLocationDot,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import { GiFlamer } from "react-icons/gi";
import foodImage from "./assets/foodItem.png";
import profileImage from "./assets/restaurantProfile.png";

const Home = () => {
  return (
    <div className="w-[430px] border border-red-500 p-0.5">
      {/* upper part  */}

      <div className="flex justify-between gap-4">
        {/* profile part  */}
        <div className="flex justify-start gap-2">
          <img className="w-[48px] h-[48px] " src={profileImage} alt="" />
          <div>
            <h2 className="text-[#161616] text-lg font-medium leading-[30px] ">
              Laziz Biriyani Huse
            </h2>
            <p className="text-[#585858] text-xs  ">2:30 | 23 Apr 2024</p>
          </div>
        </div>

        {/* follow and three dot  */}
        <div className="flex justify-end items-center gap-3 ">
          <button className="rounded-[50px] bg-gradient-to-br from-[#FFB800] to-[#FF7A00] px-6 py-1.5 text-white ">
            Follow
          </button>
          <BsThreeDots />
        </div>
      </div>
      <h2 className="text-[#161616] text-sm leading-[22px] py-2 ">
        Chicken biryani is a quintessential South Asian dish known for its rich
        flavors and aromatic spices.
      </h2>
      {/* image part  */}
      <img className="w-full items-stretch h-[246px] " src={foodImage} alt="" />
      <div className="flex justify-between ">
        <div className="flex justify-start mt-1.5 ">
          <FaStar className="text-[#FFB800] mr-0.5 " />
          <p className="text-[#585858] text-xs ">
            4.5 Out of 50 members{" "}
            <span className="text-[#D2D2D2] mx-1 ">|</span>
          </p>
          <FaCommentDots className="text-[#2131F0] mr-0.5" />
          <p className="text-[#585858] text-xs ">
            14 <span className="text-[#D2D2D2] mx-1 ">|</span>
          </p>
          <FaLocationDot className="text-[#9F7CEC] mr-0.5 " />
          <p className="text-[#585858] text-xs ">Tangail</p>
        </div>
        <div className="flex gap-0.5 md:hidden">
          <GiFlamer className="text-[#EC8154] mr-0.5" />
          <p className="text-[#585858] text-xs ">Trending now</p>
        </div>
      </div>
      {/* rating here  */}
      <div className="mt-3.5 flex justify-between ">
        <h1 className="flex gap-0.5 bg-[#F6F6F6] w-fit px-2 py-1.5 rounded-[100px] ">
          <FaStar className="text-[#FFB800]  " />
          <FaStar className="text-[#FFB800]  " />
          <FaStar className="text-[#FFB800]  " />
          <FaRegStar className="text-[#585858] " />
          <FaRegStar className="text-[#585858] " />
        </h1>
        <button className="rounded-[50px] bg-gradient-to-br from-[#FFB800] to-[#FF7A00] px-6 py-1.5 text-white ">
          See direction
        </button>
      </div>
    </div>
  );
};

export default Home;
