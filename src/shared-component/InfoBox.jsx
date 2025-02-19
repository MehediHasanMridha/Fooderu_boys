
const InfoBox = ({ icon, text }) => {
    return (
        <div className="flex gap-2 items-center ">
            <img className="h-5 w-5" src={icon} alt="" />
            <p className="text-base font-normal leading-[140%]">{text}</p>
        </div>
    );
};

export default InfoBox;