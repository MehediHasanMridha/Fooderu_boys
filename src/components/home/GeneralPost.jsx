import dp from "../../assets/img/dp.png";
import post from "../../assets/img/post.png";
import comment from "../../assets/svg/comment.svg";
import dot from "../../assets/svg/dot.svg";
import line from "../../assets/svg/line.svg";
import location from "../../assets/svg/location.svg";
import star from "../../assets/svg/star.svg";
export default function GeneralPost() {
  return (
    <div className="flex flex-col p-2 md:p-4 gap-2 rounded-md bg-white">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img
            className="w-9 h-9 rounded-md md:h-12 md:w-12"
            src={dp}
            alt=""
            srcSet=""
          />
          <div>
            <h1 className="text-sm md:text-base font-medium text-[#161616]">
              Laziz Biriyani Huse
            </h1>
            <div className="flex gap-1 mt-[2px]">
              <h1 className="text-xs font-normal">2:30</h1>
              <img src={line} alt="" />
              <h1 className="text-xs font-normal">23 Apr 2024</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="w-[52px] md:w-[98px] rounded-2xl md:rounded-3xl text-xs md:text-sm font-normal text-white bg-black py-1 px-[6px] md:py-2 md:px-4">
            Follow
          </button>
          <button>
            <img src={dot} alt="" className="md:w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-normal text-[10.5px] leading-4 md:text-[15px] md:leading-5">
          Chicken biryani is a quintessential South Asian dish known for its
          rich flavors and aromatic spices. Tender... more
        </h1>
        <img
          className="h-[183px] object-fill rounded-sm w-full sm:h-[246px] sm:rounded md:h-[472px] md:rounded-md lg:h-[500px]"
          src={post}
          alt=""
        />
      </div>
      <div className="flex gap-[3px]">
        <div className="flex items-center gap-[2px]">
          <img src={star} className="w-3 h-3 md:w-4 md:h-4" alt="" srcSet="" />
          <h1 className="text-[10px] text-[#585858] font-normal md:leading-4 md:text-[13px]">
            4.5 Out of 50 members
          </h1>
        </div>
        <img src={line} alt="" />
        <div className="flex items-center gap-[2px]">
          <img
            src={comment}
            className="w-3 h-3 md:w-4 md:h-4"
            alt=""
            srcSet=""
          />
          <h1 className="text-[10px] text-[#585858] font-normal md:leading-4 md:text-[13px]">
            14 commemts
          </h1>
        </div>
        <img src={line} alt="" />
        <div className="flex items-center gap-[2px]">
          <img
            src={location}
            className="w-3 h-3 md:w-4 md:h-4"
            alt=""
            srcSet=""
          />
          <h1 className="text-[10px] text-[#585858] font-normal md:leading-4 md:text-[13px]">
            Tangail
          </h1>
        </div>
      </div>
    </div>
  );
}
