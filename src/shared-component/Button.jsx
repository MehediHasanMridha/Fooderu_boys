/* eslint-disable react/prop-types */
const type = {
    Primary: "flex justify-center items-center flex-shrink-0 bg-[linear-gradient(132deg,_#FFB800_-9.44%,_#FF7A00_120.44%)] text-white font-medium text-[20px] leading-[26px] xl:w-[480px] xl:h-[56px] rounded-[100px] gap-[10px] p-[10px]",
    Social: "flex justify-center items-center gap-[8px] p-[12px_24px] flex-shrink-0 rounded-[100px] border border-[#D2D2D2] xl:w-[480px] xl:h-[56px]"
}

const Button = ({ name, variant = "Primary", icon = "", extraClasses }) => {
    return (
        <>
            <button className={`cursor-pointer ${type[variant]} ${extraClasses}`}>
                <span className="w-[24px] h-[24px] flex-shrink-0">
                    {icon}
                </span>
                {name}
            </button>

        </>
    );
};

export default Button;