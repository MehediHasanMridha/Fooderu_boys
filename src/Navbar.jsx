import logo from "./assets/Logo (2).png";
import notification from "./assets/notification.svg";
import search from "./assets/search.svg";
import threeDot from "./assets/threeDOt.jpg";
// icon part here
import iconTwo from "./assets/Icon/fire-flame.svg";
import iconFive from "./assets/Icon/Icon five.svg";
import iconOne from "./assets/Icon/Icon one.svg";
import iconThree from "./assets/Icon/Icon three.svg";
import iconFour from "./assets/Icon/megaphone.svg";

const Navbar = () => {
  return (
    <div className="w-[430px]  ">
      {/* top line  */}
      <div className="flex justify-between px-4 mt-4">
        <div className="flex justify-start gap-1.5">
          <img src={threeDot} alt="" />
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-start gap-1.5">
          <img src={notification} alt="" />
          <img src={search} alt="" />
        </div>
      </div>
      {/* navigation button  */}
      <div className="flex justify-between mt-2 gap-1.5 ">
        <button className="flex items-center justify-center mx-auto bg-[#F6F6F6] w-full rounded-xl py-2">
          <img className="" src={iconOne} alt="" />
        </button>
        <button className="flex items-center justify-center mx-auto w-full rounded-2xl py-2">
          <img src={iconTwo} alt="" />{" "}
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <img src={iconThree} alt="" />{" "}
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <img src={iconFour} alt="" />{" "}
        </button>
        <button className="flex items-center justify-center mx-auto w-full py-2">
          <img src={iconFive} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
