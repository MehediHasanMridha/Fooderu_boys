
const DateOfBirth = () => {
    return (
        <div>
            <div className="mt-[132px] mx-6 md:mt-[188px] md:mx-[64px] md:flex md:flex-col md:items-center 2xl:mt-[144px] 2xl:mx-[490px]">
                {/* Top */}
                <div className="flex items-center md:w-[660px] 2xl:w-[942px]">
                    {/* First Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center rounded-[100px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white font-inter text-[14px] font-normal leading-[22px]">
                        1
                    </div>
                    {/* line */}
                    <div className="w-[96px] h-[4px] rounded-[8px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]"></div>

                    {/* Second Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center rounded-[100px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white font-inter text-[14px] font-normal leading-[22px]">
                        2
                    </div>
                    {/* line */}
                    <div className="w-[96px] h-[4px] rounded-[8px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]"></div>

                    {/* Third Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center rounded-[100px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white font-inter text-[14px] font-normal leading-[22px]">
                        3
                    </div>
                    {/* line */}
                    <div className="w-[96px] h-[4px] rounded-[8px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]"></div>

                    {/* Fourth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        4
                    </div>
                    {/* line */}
                    <div className="w-[96px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Fifth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        5
                    </div>
                    {/* line */}
                    <div className="w-[96px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Sixth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        6
                    </div>
                </div>

                <p className="mt-[173px] text-start md:w-[452px] text-[#585858] text-[18px] font-medium leading-[30px] font-inter md:mt-[240px] ">
                Your date of birth  
                </p>

                {/* Input-field */}
                <div className="flex  gap-[14px] md:gap-[22px]">
                    <input
                        type="text"
                        placeholder="Day"
                        className="my-6 w-[118px] h-[56px] border border-[#d2d2d2] rounded-[100px] px-6 py-3 md:w-[135px] md:h-[52px] lg:w-[144px] lg:h-[56px]"
                    />

                    <input
                        type="text"
                        placeholder="Month"
                        className="my-6 w-[118px] h-[56px] border border-[#d2d2d2] rounded-[100px] px-6 py-3 md:w-[135px] md:h-[52px] lg:w-[144px] lg:h-[56px]"
                    />

                    <input
                        type="text"
                        placeholder="Year"
                        className="my-6 w-[118px] h-[56px] border border-[#d2d2d2] rounded-[100px] px-6 py-3 md:w-[135px] md:h-[52px] lg:w-[144px] lg:h-[56px]"
                    />

                </div>

                {/* Confirm button */}
                <button className="w-[382px] lg:w-[480px] h-[56px] px-[10px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] rounded-full text-white text-[18px] font-medium leading-[30px] font-inter cursor-pointer md:w-[452px] 2xl:w-[480px]">
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default DateOfBirth;