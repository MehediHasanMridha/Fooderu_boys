/* eslint-disable react/prop-types */
import image1 from "../../images/1.png";
import Tag from "./Tag";

const Card = ({ id }) => {
  console.log(id);
  return (
    <div className={`w-[777px] h-[746px] ${id % 2 === 0 ? "mt-[84px]" : ""}`}>
      <div className="overflow-hidden ">
        <img
          className="hover:scale-110 transition-transform ease-in duration-100 rounded-2xl"
          src={image1}
          alt=""
        />
      </div>
      <div className="flex justify-between items-end gap-[52px] pt-5 pb-[13px] ">
        <h2 className="text-[#040633] text-4xl font-medium leading-[52px] w-[560px]">
          Fitbuddy - a fitness app for lifestyle
        </h2>
        <button className="bg-[#040633] cursor-pointer rounded-2xl text-white h-[43.3px] text-[14.35px] font-bold leading-[23.318px] tracking-[0.287px] flex justify-between gap-2 items-center px-[21px] hover:bg-[#852EFF] transition-all ease-in ">
          <h1>View Work</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
          >
            <path
              d="M9.50156 1.4248L1.28033 9.64603"
              stroke="white"
              strokeWidth="1.34529"
              strokeLinecap="round"
            />
            <path
              d="M5.01727 0.775538C5.01727 0.775538 9.22769 0.420609 9.86665 1.05956C10.5056 1.69851 10.1506 5.90894 10.1506 5.90894"
              stroke="white"
              strokeWidth="1.34529"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-start gap-4 ">
        <Tag tag={"Lifestyle"} />
        <Tag tag={"IOS"} />
        <Tag tag={"Android"} />
      </div>
    </div>
  );
};

export default Card;
