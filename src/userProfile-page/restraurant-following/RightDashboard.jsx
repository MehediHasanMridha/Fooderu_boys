import Profile from "../../ui/profile/index";
import Title from "../../ui/title/index";

import pic1 from "../../assets/card-icons/r-pic1.png";
import Button from "../../ui/button/index";

const RightDashboard = () => {
  return (
    <div className="hidden xl:block xl:scale-90 2xl:p-6 xl:p-3 2xl:w-[412px] h-fit flex flex-col 2xl:gap-10 xl:shadow-md">
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