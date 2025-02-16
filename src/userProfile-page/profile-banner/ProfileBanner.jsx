import profileBannerImg from '../../assets/profile-banner.png'
import profilePic from '../../assets/profile-pic.jpeg'
import cameraIcon from '../../assets/Camera.svg';

const ProfileBanner = () => {
    return (
        <section>
            <div className='relative'>
                {/* image + change button container  */}
                <div className='relative'>
                    <img
                        className="w-[430px] h-[132.617px] shrink-0 rounded-b-lg object-cover"
                        src={profileBannerImg}
                        alt="" />

                    {/* change cover button  */}
                    <button
                        className="rounded-[100px] bg-[rgba(22,22,22,0.56)] inline-flex h-[20px] px-[6px] py-[4px] justify-center items-center shrink-0 text-white font-inter text-[10px] font-normal leading-none absolute bottom-[9.7px] right-[10px]"
                    >
                        Change cover
                    </button>
                </div>
                {/* profile image with camera icon  */}
                <img
                    className="w-[100px] h-[100px] shrink-0 rounded-[100px] border-4 border-white m-2 object-cover absolute left-[22px] top-[80px]"
                    src={profilePic} alt="" />

                <button className='w-6 h-6 shrink-0 bg-[rgba(22,22,22,0.40)] rounded-full flex items-center justify-center absolute top-[157px] left-[98px]'>
                    <img src={cameraIcon} alt="" />
                </button>

            </div>

        </section>
    );
};

export default ProfileBanner;