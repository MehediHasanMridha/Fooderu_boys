import profileBannerImg from '../../assets/profile-icons/profile-banner.png'
import profilePic from '../../assets/profile-icons/profile-pic.jpeg'
import cameraIcon from '../../assets/profile-icons/Camera.svg';

const ProfileBanner = () => {
    return (
        <section>
            <div className='relative'>
                {/* image + change button container  */}
                <div className='relative'>
                    <img
                        className="w-[430px] md:w-[740.763px]  h-[132.617px] md:h-[228.072px] shrink-0 rounded-b-lg object-cover"
                        src={profileBannerImg}
                        alt="" />

                    {/* change cover button  */}
                    <button
                        className="rounded-[100px] bg-[rgba(22,22,22,0.56)] inline-flex h-[20px] px-[6px] py-[4px] justify-center items-center shrink-0 text-white text-[10px] font-normal leading-none absolute bottom-[9.7px] right-[10px]"
                    >
                        Change cover
                    </button>
                </div>
                {/* profile image with camera icon  */}
                <img
                    className="w-[100px] md:w-[142px] h-[100px] md:h-[142px] shrink-0 rounded-[100px] border-4 border-white m-2 object-cover absolute left-[22px] md:left-[65px] top-[80px] md:top-[182px]"
                    src={profilePic} alt="" />

                <button className='w-6 h-6 shrink-0 bg-[rgba(22,22,22,0.40)] rounded-full flex items-center justify-center absolute top-[157px] md:top-[283px] left-[98px] md:left-[169px]'>
                    <img src={cameraIcon} alt="" />
                </button>

            </div>

        </section>
    );
};

export default ProfileBanner;