import Profile from "../../ui/profile/index";
import Title from "../../ui/title/index";

import pic1 from "../../assets/card-icons/r-pic1.png";
import Button from "../../ui/button/index";

const RightDashboard = () => {
  return (
    <div className="hidden 2xl:p-6 2xl:w-[412px] h-fit 2xl:flex 2xl:flex-col 2xl:gap-10 2xl:shadow-md">
      {/* Followed Restaurants */}
      <Title title="Followed restaurants" />
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="outlineSecondary">Following</Button>
        </div>

        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="outlineSecondary">Following</Button>
        </div>

        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="outlineSecondary">Following</Button>
        </div>

        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="outlineSecondary">Following</Button>
        </div>
      </div>
    </div>
  );
};

export default RightDashboard;