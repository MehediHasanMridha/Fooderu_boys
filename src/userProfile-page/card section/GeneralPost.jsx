// import { BsThreeDots } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";
// import { TbArrowWaveRightUp } from "react-icons/tb";
// import Rating from "react-rating";
// // extra start
import { FaLocationDot } from 'react-icons/fa6';
import image1 from '../../assets/card-icons/Rectangle 11.png'
import image2 from '../../assets/card-icons/Rectangle 130 (1).png'

// extra end

const GeneralPost = () => {

    return (
        <div className='  w-[414px] md:w-[755px] lg:w-[816px] md:mx-auto mx-auto font-[inter]'>
            <div className="container p-2 mx-auto">
                <div className="md:w-[755px] lg:w-[816px] mx-auto md:h-[48px] my-2 gap-4 flex justify-center">
                    <div>
                        <img className="md:w-12 md:h-12 rounded-lg" src={image2} alt="" />
                    </div>
                    <div className="md:w-[568px] md:h-12 w-[232px]">
                        <h1 className="text-black font-semibold">Laziz Biriyani House</h1>
                        <p className="text-[#585858]">2:30 | 23 apr 2024</p>
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div className="md:h-9 md:w-[98px] md:ml-2 lg:w-[104px] w-[70px] h-[27px]  ">
                            <button className="cursor-pointer btn bg-[#FFB800] rounded-full md:font-semibold p-[7px] text-white w-full">Follow</button>
                        </div>
                        <div className="flex md:ml-1 items-center my-auto justify-between gap-1 md:w-[56px] md:h-6">
                            <button className='cursor-pointer w-6 h-6 md:h-[22px] md:w-[22px] '><img src="../../assets/card-icons/Frame.png" alt="" /></button>
                        </div>
                    </div>

                </div>
                {/* post paragraph */}
                <div className="w-[414px]  md:w-[755px] lg:w-[816px] lg:pr-4 mx-auto mb-2">
                    <p className="md:text-[16px] text-[14px] text-[#161616]">Chicken biryani is a quintessential South Asian dish known for its rich flavors and aromatic spices. Tender pieces of chicken are marinated in a blend of yogurt and spices ... more</p>
                </div>

                {/* imgage of the post */}
                <div>
                    <img className="mx-auto w-[414px] h-[246px] md:w-[755px] lg:w-[816px] md:h-[471px]  rounded-lg  flex justify-center items-center" src={image1} alt="" />
                    <div className=" mt-1 flex items-center mx-auto w-[414px] h-[16px] md:w-[755px] lg:w-[816px] md:h-[22px]">
                        <div className="md:w-[177px] w-[150px] flex items-center my-auto md:h-[22px]">
                            <div className="">
                                <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.19198 2.14006C7.49065 1.42206 8.50931 1.42206 8.80798 2.14006L10.196 5.4774L13.7986 5.76673C14.5746 5.82873 14.8893 6.79673 14.298 7.3034L11.5533 9.65473L12.3913 13.1701C12.572 13.9274 11.7486 14.5254 11.0846 14.1201L7.99998 12.2361L4.91531 14.1201C4.25131 14.5254 3.42798 13.9267 3.60865 13.1701L4.44665 9.65473L1.70198 7.3034C1.11065 6.79673 1.42531 5.82873 2.20131 5.76673L5.80398 5.4774L7.19198 2.14006Z" fill="url(#paint0_linear_4058_6018)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4058_6018" x1="-0.434281" y1="1.01775" x2="16.741" y2="17.426" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FFB800" />
                                            <stop offset="1" stopColor="#FF7A00" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className=" text-[12px]  font-semibold text-[#585858] flex items-center w-[126px] ml-[2px]">4.5 Out of 50 members </p>
                        </div>
                        <div className="md:w-[115px] flex gap-1 items-center my-auto md:h-[22px]">
                            <div className="">
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.20267 14.4293C3.4658 14.4767 3.73264 14.5003 4 14.5C4.84498 14.5011 5.67306 14.2633 6.38867 13.814C6.90467 13.9353 7.44467 14 8 14C11.548 14 14.5 11.3533 14.5 8C14.5 4.64667 11.548 2 8 2C4.452 2 1.5 4.64667 1.5 8C1.5 9.606 2.18333 11.058 3.28267 12.128C3.43733 12.2787 3.46733 12.4133 3.452 12.49C3.36961 12.9047 3.18284 13.2916 2.90933 13.614C2.85255 13.681 2.81444 13.7618 2.79882 13.8483C2.7832 13.9347 2.79064 14.0238 2.82038 14.1064C2.85012 14.1891 2.90111 14.2625 2.96822 14.3192C3.03533 14.3758 3.1162 14.4138 3.20267 14.4293ZM5.5 7.25C5.30109 7.25 5.11032 7.32902 4.96967 7.46967C4.82902 7.61032 4.75 7.80109 4.75 8C4.75 8.19891 4.82902 8.38968 4.96967 8.53033C5.11032 8.67098 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.67098 6.03033 8.53033C6.17098 8.38968 6.25 8.19891 6.25 8C6.25 7.80109 6.17098 7.61032 6.03033 7.46967C5.88968 7.32902 5.69891 7.25 5.5 7.25ZM7.25 8C7.25 7.80109 7.32902 7.61032 7.46967 7.46967C7.61032 7.32902 7.80109 7.25 8 7.25C8.19891 7.25 8.38968 7.32902 8.53033 7.46967C8.67098 7.61032 8.75 7.80109 8.75 8C8.75 8.19891 8.67098 8.38968 8.53033 8.53033C8.38968 8.67098 8.19891 8.75 8 8.75C7.80109 8.75 7.61032 8.67098 7.46967 8.53033C7.32902 8.38968 7.25 8.19891 7.25 8ZM10.5 7.25C10.3011 7.25 10.1103 7.32902 9.96967 7.46967C9.82902 7.61032 9.75 7.80109 9.75 8C9.75 8.19891 9.82902 8.38968 9.96967 8.53033C10.1103 8.67098 10.3011 8.75 10.5 8.75C10.6989 8.75 10.8897 8.67098 11.0303 8.53033C11.171 8.38968 11.25 8.19891 11.25 8C11.25 7.80109 11.171 7.61032 11.0303 7.46967C10.8897 7.32902 10.6989 7.25 10.5 7.25Z" fill="url(#paint0_linear_4058_6023)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4058_6023" x1="2.605" y1="2.3125" x2="12.0598" y2="15.2945" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#2131F0" />
                                            <stop offset="1" stopColor="#0A82FE" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p className=" w-[78px] text-xs font-semibold text-[#585858] flex items-center justify-center">14 Comments</p>
                        </div>
                        <div className="md:w-[72px] ml-1 flex gap-[3px] items-center justify-center my-auto md:h-[22px]">
                            <div className=""><FaLocationDot className='h-[12px] w-[13px] md:w-4 md:h-4 text-blue-600'></FaLocationDot> </div>
                            <p className="w-[41px] text-xs font-semibold text-[#585858] flex items-center justify-center">Tangail</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default GeneralPost;