/* eslint-disable react/prop-types */
import Button from "../button";

const Card = ({ img, title, icon, followers }) => {
  return (
    <div className="w-[203px] space-y-2 p-2 rounded-[8px] bg-white shadow-md">
      <img src={img} alt={title} className="w-full rounded-[4px]" />
      <h4 className="text-[16px] text-[#161616] font-inter font-medium">
        {title}
      </h4>
      <div className="flex items-center gap-1">
        {/* icon */}
        {icon && <img src={icon} alt="icon" className="w-4 h-4" />}
        <p className="text-[12px] text-[#585858]">
          {followers} People follow them
        </p>
      </div>
      <Button variant="primary">Follow</Button>
      <Button variant="outline">View Profile</Button>
    </div>
  );
};

export default Card;
