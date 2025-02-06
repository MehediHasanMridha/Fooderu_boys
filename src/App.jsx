import Frame1 from "./assets/Frame1.png";
import PlayBtn from "./assets/playBTN.png";
import Rectangle from "./assets/Rectangle.png";
import MarqueeSection from "./components/MarqueeSection";

const App = () => {
  return (
    <>
      <MarqueeSection />
      <div className="w-[1600px] h-[1110px] bg-[#FFFAEE] mx-auto my-[125px] rounded-[48px] relative flex flex-col items-center justify-center">
        <div className="text-[92px] font-[500] h-[80px] absolute top-[248px] left-[344px]">
          User Experience
        </div>
        <div className="text-[92px] font-[500] h-[106px] absolute text-[#FEBE0B] rotate-[-90deg] left-[200px] top-[652px]">
          Development
        </div>
        <div className="absolute bottom-[280px] left-[663px] text-[92px] font-[500]">
          User Interface
        </div>
        <div className="absolute right-[340px] top-[415px] h-[131px] text-[92px] font-[500] text-[#777991] rotate-[-90deg]">
          Research
        </div>
        <img src={PlayBtn} alt="" />
      </div>
      <div
        className="h-[923px] w-full py-[88px] px-[160px] flex justify-between space-x-[32px]"
        style={{
          backgroundImage: `url(${Rectangle})`,
        }}
      >
        <div className="relative h-full -bottom-[88px] flex flex-col justify-end">
          <img src={Frame1} alt="" />
        </div>
        <div className="w-[1060px] h-full flex flex-col justify-start space-y-[36px] relative">
          <span className="w-[111px] text-[24px] font-[400] text-[#FEBE0B]">
            About Us
          </span>
          <div className="text-[64px] font-[500] leading-[79px] text-white">
            We are inspired to reach even greater heights when our clients share
            project results with us.
          </div>
          <hr className="w-full text-[#717BBC]" />
          <div className="w-[726px] h-[254px] grid grid-cols-2 gap-x-[170px] gap-y-[36px]">
            <div className="">
              <span className="w-[126px] h-[47px] font-[800] text-[48px] text-[#FFFFFF]">
                420+
              </span>
              <p className="text-[16px] leading-[26px] tracking-[2%] text-[#FFFFFF] opacity-[70%]">
                We have completed these projects and products
              </p>
            </div>
            <div className="">
              <span className="w-[126px] h-[47px] font-[800] text-[48px] text-[#FFFFFF]">
                15.3
              </span>
              <p className="text-[16px] leading-[26px] tracking-[2%] text-[#FFFFFF] opacity-[70%]">
                Hours/month one specialist allocates to studying new trends and
                technologies. Proved by our Hubstaff analytics :)
              </p>
            </div>
            <div className="">
              <span className="w-[126px] h-[47px] font-[800] text-[48px] text-[#FFFFFF]">
                420+
              </span>
              <p className="text-[16px] leading-[26px] tracking-[2%] text-[#FFFFFF] opacity-[70%]">
                We have completed these projects and products
              </p>
            </div>
            <div className="">
              <span className="w-[126px] h-[47px] font-[800] text-[48px] text-[#FFFFFF]">
                420+
              </span>
              <p className="text-[16px] leading-[26px] tracking-[2%] text-[#FFFFFF] opacity-[70%]">
                We have completed these projects and products
              </p>
            </div>
          </div>
          <div className="w-[184px] py-[14px] mt-[77px] h-[52px] rounded-[89.69px] flex justify-center items-center bg-[#852EFF] text-[16px] font-[400] text-white">
            Get In touch
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
