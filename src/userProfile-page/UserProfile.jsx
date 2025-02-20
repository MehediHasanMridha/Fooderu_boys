import HorizontalLine from "../shared-component/HorizontalLine";
import GeneralPost from "./card section/GeneralPost";
import InfoPersonal from "./personal-info/InfoPersonal";
import ProfileBanner from "./profile-banner/ProfileBanner";
import ProfileButtons from "./profile-button/ProfileButtons";
import ProfileName from "./profile-name/ProfileName";
import ProfileTab from "./profile-tab/ProfileTab";


const UserProfile = () => {
    return (
        <div className="font-[inter] space-y-1">

            <div className="rounded-b-lg shadow-[0px_0px_6px_0px_rgba(0,0,0,0.10)]">
                <ProfileBanner />
                <ProfileName />
                <ProfileButtons />
                <HorizontalLine/>
                <ProfileTab />
            </div>
            <InfoPersonal />
            <GeneralPost/>

        </div>
    );
};

export default UserProfile;