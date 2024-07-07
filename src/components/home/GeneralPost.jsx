import dp from "../../assets/img/dp.png";
import post from "../../assets/img/post.png";
import comment from "../../assets/svg/comment.svg";
import dot from "../../assets/svg/dot.svg";
import line from "../../assets/svg/line.svg";
import location from "../../assets/svg/location.svg";
import star from "../../assets/svg/star.svg";
export default function GeneralPost() {
  return (
    <div className="flex flex-col p-2 gap-2 rounded-md bg-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img className="w-9 h-9 rounded-md" src={dp} alt="" srcSet="" />
          <div>
            <h1 className="text-sm font-medium text-[#161616]">
              Laziz Biriyani Huse
            </h1>
            <div className="flex gap-1 mt-[2px]">
              <h1 className="text-xs font-normal">2:30</h1>
              <img src={line} alt="" />
              <h1 className="text-xs font-normal">23 Apr 2024</h1>
            </div>
          </div>
        </div>
        <button className="w-[52px] rounded-2xl text-xs font-normal text-white bg-black py-1 px-[6px]">
          Follow
        </button>
        <button>
          <img src={dot} alt="" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-normal text-[10.5px] leading-4">
          Chicken biryani is a quintessential South Asian dish known for its
          rich flavors and aromatic spices. Tender... more
        </h1>
        <img className="h-[183px] rounded-sm w-full" src={post} alt="" />
      </div>
      <div className="flex gap-[3px]">
        <div className="flex items-center gap-[2px]">
          <img src={star} className="w-3 h-3" alt="" srcSet="" />
          <h1 className="text-[10px] text-[#585858] font-normal">
            4.5 Out of 50 members
          </h1>
        </div>
        <img src={line} alt="" />
        <div className="flex items-center gap-[2px]">
          <img src={comment} className="w-3 h-3" alt="" srcSet="" />
          <h1 className="text-[10px] text-[#585858] font-normal">
            14 commemts
          </h1>
        </div>
        <img src={line} alt="" />
        <div className="flex items-center gap-[2px]">
          <img src={location} className="w-3 h-3" alt="" srcSet="" />
          <h1 className="text-[10px] text-[#585858] font-normal">Tangail</h1>
        </div>
      </div>
    </div>
  );
}
