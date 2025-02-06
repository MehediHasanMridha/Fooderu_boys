import { FaDribbble } from "react-icons/fa";
import {
  PiLinkedinLogoThin,
  PiInstagramLogoThin,
  PiFacebookLogoThin,
  PiBehanceLogoLight,
} from "react-icons/pi";

const StayInTuch = () => {
  return (
    <div className="w-full flex flex-col ml-16">
      <h2 className="mb-6 text-gray-500 font-semibold ">Stay In Touch</h2>
      <div className="*:flex *:items-center *:gap-x-2.5 *:gap-y-4">
        <a href="#">
          <span>
            <FaDribbble></FaDribbble>
          </span>
          Dribbble
        </a>
        <a href="#">
          <span>
            <PiBehanceLogoLight />
          </span>
          Behance
        </a>
        <a href="#">
          <span>
            <PiLinkedinLogoThin></PiLinkedinLogoThin>
          </span>
          Linkedin
        </a>
        <a href="#">
          <span>
            <PiInstagramLogoThin></PiInstagramLogoThin>
          </span>
          Instragram
        </a>
        <a href="#">
          <span>
            <PiFacebookLogoThin />
          </span>
          Facebook
        </a>
      </div>
    </div>
  );
};

export default StayInTuch;
