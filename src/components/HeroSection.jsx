import centerImage from "../assets/34 1.png";
import leftTopImage from "../assets/Group 39763.png";
import leftBottomImage from "../assets/Group 39782.png";
import rightBottomImage from "../assets/Group 39789.png";
import bgImage from "../assets/Subtract.png";
import StayInTuch from "./StayInTuch";

const HeroSection = () => {
  return (
    <div className="w-[1600px] mx-auto flex pt-16">
      <aside className="relative ml-[100px] w-[1300px]">
        <div
          className="bg- h-[722px] w-[1264px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute top-[95px] left-[433px]">
            <img className="h-[398px] w-[394px]" src={centerImage} alt="" />
          </div>
          <div className="absolute -top-[57px] -left-[47px]">
            <img src={leftTopImage} alt="" />
          </div>
          <div className="absolute top-[526px] -left-[105px]">
            <img src={leftBottomImage} alt="" />
          </div>
          <div className="absolute right-[80px] bottom-[38px]">
            <img src={rightBottomImage} alt="" />
          </div>
        </div>
      </aside>
      <aside className="flex justify-center items-center flex-auto">
        <StayInTuch />
      </aside>
    </div>
  );
};

export default HeroSection;
