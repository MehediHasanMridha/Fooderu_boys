import Divider from "../../ui/divider";
import Profile from "../../ui/profile";

import aboutIcon from "../../assets/about.svg";
import faqIcon from "../../assets/faq.svg";
import logIcon from "../../assets/log.svg";
import profileIcon from "../../assets/profile.svg";
import restaurantIcon from "../../assets/restaurant.svg";
import saveIcon from "../../assets/save.svg";
import settingsIcon from "../../assets/settings.svg";
import termsIcon from "../../assets/terms.svg";

const LeftDashboard = () => {
  return (
    <div className="hidden 2xl:p-6 2xl:w-[412px] 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:gap-10 2xl:shadow-md">
      <div className="flex gap-2 items-center">
        <img src={profileIcon} alt="profile" className="w-12 h-12" />
        <p className="text-[20px] text-[#161616] font-medium font-inter">
          Abdullah Al Mahmud
        </p>
      </div>
      <Profile icon={saveIcon} title="Saved" />
      <Profile icon={restaurantIcon} title="Restaurants" />

      <Divider />

      <Profile icon={settingsIcon} title="Settings" />
      <Profile icon={aboutIcon} title="About Us" />
      <Profile icon={faqIcon} title="FAQs" />
      <Profile icon={termsIcon} title="Terms & Conditions" />

      <Divider />

      <Profile icon={logIcon} title="Log Out" />
    </div>
  );
};

export default LeftDashboard;
