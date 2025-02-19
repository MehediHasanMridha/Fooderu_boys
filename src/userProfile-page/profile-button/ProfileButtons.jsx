import ProfileButton from "../../shared-component/ProfileButton";

const ProfileButtons = () => {

   const threeDot =  <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis"/>
    return (
        <div className="my-2 ml-6 flex gap-2">
            <ProfileButton
                title={"My restaurant"}
                bgColor={"bg-[#FFB800]"}
                textColor={"text-white"}
            />
            <ProfileButton
                title={"Edit Profile"}
                bgColor={"bg-[#F6F6F6]"}
                textColor={"text-[#585858]"}
            />
            <ProfileButton
                title={threeDot}
                bgColor={"bg-[#F6F6F6]"}
                textColor={"text-[#585858]"}
            />
        </div>
    );
};

export default ProfileButtons;