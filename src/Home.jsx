import { BsThreeDots } from "react-icons/bs";
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
    </div>
  );
};

export default Home;
