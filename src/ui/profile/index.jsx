/* eslint-disable react/prop-types */
const Profile = ({ icon, iconClassName, title, titleClassName, className }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <img src={icon} alt={title} className={`w-6 h-6 ${iconClassName}`} />
      <p className={`text-[20px] text-[#161616] font-inter ${titleClassName}`}>
        {title}
      </p>
    </div>
  );
};

export default Profile;
