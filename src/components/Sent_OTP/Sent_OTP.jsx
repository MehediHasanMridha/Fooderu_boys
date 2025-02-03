const Sent_OTP = () => {
    return (
        <div className="flex justify-center">
            <div className="">
                {/* Top */}
                <div className="flex mt-[132px] md:mt-[188px] lg:mt-[144px]  items-center">
                    {/* First Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center rounded-[100px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00] text-white font-inter text-[14px] font-normal leading-[22px]">
                        1
                    </div>
                    {/* line */}
                    <div className="w-[47.6px] md:w-[95px] lg:w-[150px] h-[4px] rounded-[8px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]"></div>

                    {/* Second Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#ff7b00] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        2
                    </div>
                    {/* line */}
                    <div className="w-[47.6px] md:w-[95px] lg:w-[150px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Third Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        3
                    </div>
                    {/* line */}
                    <div className="w-[47.6px] md:w-[95px] lg:w-[150px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Fourth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        4
                    </div>
                    {/* line */}
                    <div className="w-[47.6px] md:w-[95px] lg:w-[150px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Fifth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        5
                    </div>
                    {/* line */}
                    <div className="w-[47.6px] md:w-[95px] lg:w-[150px] h-[4px] rounded-[8px] bg-[#d2d2d2]"></div>

                    {/* Sixth Round */}
                    <div className="w-6 h-6 p-0 flex justify-center items-center border border-[#d2d2d2] rounded-[100px] font-inter text-[14px] text-[#585858] font-normal leading-[22px]">
                        6
                    </div>
                </div>
                {/* sent otp input field */}
                <div className="w-[382px] h-[220px] md:w-[452px] lg:w-[480px] mx-auto grid grid-cols-1 gap-6 mt-[143px]">
                    <h1 className="text-[18px] lg:text-[20px] text-[#585858]">Let us know your phone number to provide you a better service</h1>
                    <div>
                        <input className="border-[#D2D2D2] border rounded-[100px] w-[382px] h-[56px] md:w-[452px] lg:w-[480px] px-4" type="text" placeholder="+880" />
                    </div>
                    <button className="rounded-[100px] w-[382px] h-[56px] md:w-[452px] lg:w-[480px] bg-[#FFB800] text-white text-[18px] ">Send OTP</button>
                </div>
            </div>
        </div>
    );
};

export default Sent_OTP;