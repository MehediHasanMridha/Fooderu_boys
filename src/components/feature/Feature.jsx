import arrow from "../../images/arrow.svg";
import Card from "../ui/Card";
import Title from "../ui/Title";

const Feature = () => {
  return (
    <div className="w-[1920px] mx-auto ">
      <Title
        title1={"OUR PORTFOLIO"}
        title2={
          "User-centered design encourages productivity and boosts revenue"
        }
      />
      <div className="px-[160px] mt-[84px]">
        {[1, 3, 5].map((id) => (
          <div
            key={id}
            className="h-[817px] mb-[48px] flex justify-between gap-[46px]"
          >
            <Card id={id} />
            <Card id={id + 1} />
          </div>
        ))}
      </div>
      <button className="w-[1600px] mt-[100px] bg-white text-[#040633] text-2xl leading-[47px] tracking-[0.48px] py-10 border rounded-[66px] border-[#F2F4F7] mx-auto ml-[160px] cursor-pointer mb-14">
        <h2 className="flex justify-center gap-2 items-center">
          View All Work
          <span>
            <img src={arrow} alt="" />
          </span>
        </h2>
      </button>
    </div>
  );
};

export default Feature;
