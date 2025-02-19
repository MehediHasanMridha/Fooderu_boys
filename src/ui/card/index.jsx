/* eslint-disable react/prop-types */
import Button from "../button";

const Card = ({ img, title, icon, followers }) => {
  return (
    <div className="w-[203px] md:w-[237px] xl:w-[272px] space-y-2 p-2 rounded-[8px] bg-white shadow-md">
      <img
        src={img}
        alt={title}
        className="w-full rounded-[4px] md:rounded-[7.5px]"
      />
      <h4 className="text-[16px] md:text-[17px] xl:text-[18px] text-[#161616] font-inter xl:leading-[24px]">
        {title}
      </h4>
      <div className="flex items-center gap-1">
        {/* icon */}
        {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
        <p className="text-[12px] md:text-[13px] xl:text-[14px] text-[#585858] xl:leading-[24px]">
          {followers} People follow them
        </p>
      </div>
      <Button variant="primary" className="md:font-medium xl:h-10">
        Follow
      </Button>
      <Button variant="outline" className="xl:h-10">
        View Profile
      </Button>
    </div>
  );
};

export default Card;
