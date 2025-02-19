/* eslint-disable react/prop-types */
const Profile = ({ icon, title }) => {
  return (
    <div className="flex gap-2 items-center">
      <img src={icon} alt={title} className="w-6 h-6" />
      <p className="text-[20px] text-[#161616] font-inter">{title}</p>
    </div>
  );
};

export default Profile;
