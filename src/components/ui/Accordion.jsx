import { useState } from "react";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";

// eslint-disable-next-line react/prop-types
const Accordion = ({ title = "", content = "", defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`w-[1602px] rounded-[32px] pl-8 pt-[37px] pr-7 pb-8 font-nexa transition-all ${
        isOpen ? "bg-[#040633] text-white" : "bg-white text-[#040633]"
      }`}
    >
      {/* Title Row */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[42px] font-light leading-[37.4px]">{title}</h3>

        <img src={isOpen ? minusIcon : plusIcon} alt="icon" />
      </div>

      {/* Content */}
      <p
        className={`w-[1322.40px] my-7 text-[24px] font-normal leading-[47px] tracking-[0.48px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default Accordion;
