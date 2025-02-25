import Profile from "../../ui/profile";
import Title from "../../ui/title";

import pic1 from "../../assets/r-pic1.jpg";
import Button from "../../ui/button";

const RightDashboard = () => {
  return (
    <div className="hidden 2xl:p-6 2xl:w-[412px] 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:gap-10 2xl:shadow-md">
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

      {/* Nearby Restaurants */}
      <Title title="Nearby restaurants" />
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="primary">Follow</Button>
        </div>

        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="primary">Follow</Button>
        </div>
      </div>

      {/* Restaurants you may like */}
      <Title title="Restaurants you may like" />
      <div className="space-y-4">
        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="primary">Follow</Button>
        </div>

        <div className="flex gap-4 items-center">
          <Profile
            icon={pic1}
            iconClassName="w-12 h-12"
            title="ভর্তা ভাত"
            titleClassName="text-[18px]"
            className="flex-grow"
          />
          <Button variant="primary">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default RightDashboard;
