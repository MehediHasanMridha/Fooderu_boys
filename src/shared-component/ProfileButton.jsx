

const ProfileButton = ({ title, bgColor, textColor }) => {
    return (
        <div>
            <button className={`flex h-8 px-3 py-2 justify-center items-center flex-1 rounded-full ${bgColor} ${textColor}`}>{title}</button>
        </div>
    );
};

export default ProfileButton;