/* eslint-disable react/prop-types */
import { EyeSlash } from "../assets/icons/SVG";


const Input = ({ name, type, icon }) => {
    return (

        <div className="flex justify-center items-center shrink-0 rounded-full border  border-[#D2D2D2]
                        xl:w-[480px] xl:h-[56px] xl:px-[24px] xl:py-[12px] xl:gap-[8px]
                        md:w-[452px] md:h-[52px] md:px-[11px] md:py-[22px] md:gap-[7px]">

            <img className="shrink-0 
            xl:w-[20px] xl:h-[20px]
            md:w-[18px] md:h-[18px]" src={icon} alt="" />

            <input className="cursor-pointer flex-1 basis-0 text-[#939393]
             xl:font-normal xl:text-[14px] xl:leading-[22px]
             md:font-normal md:text-[13px] md:leading-[19px] " placeholder={name} type={type} />
            {type === "password" && <EyeSlash />}
        </div>

    );
};

export default Input;