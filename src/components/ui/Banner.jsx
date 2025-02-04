import avatar from "../../assets/Avatar.png";
import vectorIcon from "../../assets/Vector.svg";
import leftIcon from "../../assets/left.svg";
import rightIcon from "../../assets/right.svg";

const Banner = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto my-[164px] h-[814px] overflow-hidden bg-[#040633]">
      {/* Blurred Background */}
      <div
        className="absolute w-[709px] h-[709px] rounded-[709px] opacity-60"
        style={{
          background:
            "linear-gradient(65deg, #FEBE0B 29.63%, #852EFF 61.25%, #040633 108.52%)",
          filter: "blur(131.4px)",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      {/* Left part */}
      <div className="absolute pt-[215px] pl-[160px] w-[1065px]">
        {/* heading */}
        <div className="text-[64px] text-white font-medium leading-[79px]">
          They think about products in terms of how it works and not just how it
          looks. They’re experts at what they do.
        </div>

        {/* divider */}
        <div className="h-[0.8px] my-10 border border-[#717BBC]"></div>

        {/* Bottom part */}
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img className="w-[67px] h-[76px]" src={avatar} alt="Avatar" />
            <div className="w-[188px]">
              <h5 className="text-white font-nexa text-[24px] font-bold leading-[47px] ">
                Jimmy Aderson
              </h5>
              <p className="text-[#D0D5DD] text-[14px] leading-[18px] font-nexa tracking-[0.28px]">
                Founder & CEO, <br />
                Google
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className=" flex items-center gap-1">
              <img className="w-28px cursor-pointer" src={leftIcon} alt="" />
              <button className="text-[#B3B8DB] font-nexa text-base font-normal leading-[26px] tracking-[0.32px] cursor-pointer">
                Prev
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button className="text-[#B3B8DB] font-nexa text-base font-normal leading-[26px] tracking-[0.32px] cursor-pointer">
                Next
              </button>
              <img className="w-28px cursor-pointer" src={rightIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* right part */}
      {/* shape-1 */}
      <img
        src={vectorIcon}
        alt="Blurred Shape"
        className="absolute top-[310px] right-[203px] w-[156.027px] h-[168.544px] flex-shrink-0 backdrop-blur-[21px]"
      />

      {/* TODO:shape-2 */}

      {/* TODO:shape-3 */}
    </div>
  );
};

export default Banner;
