import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TbArrowWaveRightUp } from "react-icons/tb";
import Rating from "react-rating";
// extra start

// extra end

const GeneralPost = () => {

    return (
        // <div className="container p-4 mx-auto">
        //     <div className="md:w-[816px] md:h-[48px] my-2 gap-1 flex mx-auto">
        //         <div>
        //             <img className="md:w-12 md:h-12 rounded-lg" src="/public/images/Rectangle 130.jpg" alt="" />
        //         </div>
        //         <div className="md:w-[568px] md:h-12 w-[232px]">
        //             <h1 className="text-black font-semibold">Laziz Biriyani House</h1>
        //             <p className="text-[#585858]">2:30 | 23 apr 2024</p>
        //         </div>
        //         <div className="md:h-9 md:w-[106px] md:mr-4 w-[78px] h-[27px] ">
        //             <button className="btn bg-[#FFB800] rounded-full md:font-semibold text-white w-full">Follow</button>
        //         </div>
        //         <div className="flex md:ml-1 items-center my-auto justify-between gap-1 md:w-[56px] md:h-6">
        //             <button className="w-6 h-6"><BsThreeDots className="text-xl" /></button>
        //             <button className="w-6 h-6 md:visible"><RxCross2 className="text-xl" /></button>
        //         </div>

        //     </div>
        //     {/* post paragraph */}
        //     <div className="md:w-[816px] mx-auto md:h-[72px] mb-2">
        //         <p className="md:text-[16px] text-[#161616]">Chicken biryani is a quintessential South Asian dish known for its rich flavors and aromatic spices. Tender pieces of chicken are marinated in a blend of yogurt and spices, then layered with fragrant basmati rice infused with saffron, caramelized onions, and a medley of spices like.</p>
        //     </div>

        //     {/* imgage of the post */}
        //     <div>
        //         <img className="mx-auto md:w-[816px] rounded-lg md:h-[530px] flex justify-center items-center" src="/public/images/Rectangle 11.jpg" alt="" />
        //         <div className=" mt-1 flex items-center mx-auto md:w-[816px] md:h-[22px]">
        //             <div className="md:w-[177px] flex gap-1 items-center my-auto md:h-[22px]">
        //                 <div className=""><img className="h-4 w-4" src="/public/images/Vector.jpg" alt="" /></div>
        //                 <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">4.5 Out of 50 members</p>
        //             </div>
        //             <div className="md:w-[115px] flex gap-1 items-center my-auto md:h-[22px]">
        //                 <div className=""><img className="h-4 w-5" src="/public/images/Vector (1).jpg" alt="" /></div>
        //                 <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">14 Comments</p>
        //             </div>
        //             <div className="md:w-[72px] flex gap-1 items-center my-auto md:h-[22px]">
        //                 <div className=""><img className="h-5 w-5" src="/public/images/Frame.jpg" alt="" /></div>
        //                 <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">Tangail</p>
        //             </div>
        //         </div>
        //     </div>
        //     {/* see direction */}
        //     <div className="mt-2 flex justify-between my-auto items-center mx-auto md:w-[816px] md:h-[40px]">
        //         <div className="bg-[#F6F6F6] rounded-3xl">
        //             <Rating
        //                 style={{ maxWidth: 180 }}
        //                 value={3}
        //                 readOnly
        //             />
        //         </div>
        //         <div>
        //             <button className="btn bg-[#FFB800] md:  rounded-full md:text-[16px] text-white w-full"> <span className="md:w-[101px]">See Direction</span> <TbArrowWaveRightUp />
        //             </button>
        //         </div>
        //     </div>
        //     {/* comment section */}
        //     <div className="md:w-[816px] md:h-[40px] flex gap-2  mx-auto my-3">
        //         <div className="md:h-[40px] md:w-[40px]">
        //             <img src="/public/images/Ellipse 1.jpg" alt="" />
        //         </div>
        //         {/* input field */}
        //         <div className="md:w-[760px] w-[374px] h-[32px] md:h-[40px]">
        //                 <input className="border-2 relative border-black rounded-3xl w-full md:w-[760px] md:h-[40px] p-2" placeholder="Write your comment" type="text" />
        //                 {/* submit comment button */}
        //                 <button className="relative -top-8 left-[300px] md:left-[720px] md:-top-3/4"><img className="" src="/public/images/Vector (2).jpg" alt="" /></button>
        //         </div>

        //     </div>
        //     {/* all comments part */}
        //     <div className="md:w-[816px] grid grid-cols-1 gap-4 mx-auto my-4">
        //         {/* 1st comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Hakim Badshah</h3>
        //                 <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
        //             </div>
        //         </div>
        //         {/* 2nd comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Mellano Lee</h3>
        //                 <p className="md:h-[24px]">This chicken biriyani is awesome. 🫰 </p>
        //             </div>
        //         </div>
        //         {/* 3rd comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Hakim Badshah</h3>
        //                 <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
        //             </div>
        //         </div>
        //         {/* 4th comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Mellano Lee</h3>
        //                 <p className="md:h-[24px]">This chicken biriyani is awesome. 🫰 </p>
        //             </div>
        //         </div>
        //         {/* 5th comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Carolaina Prostenco</h3>
        //                 <p className="md:h-[24px]"> Delicious 🔥 </p>
        //             </div>
        //         </div>
        //         {/* 6th comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Hakim Badshah</h3>
        //                 <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
        //             </div>
        //         </div>
        //         {/* 7th comment */}
        //         <div className="md:w-[816px] md:h-[63px] flex gap-1">
        //             <div><img src="/public/images/first-comment.jpg" alt="" /></div>
        //             <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
        //                 {/* user name */}
        //                 <h3 className="font-semibold">Carolaina Prostenco</h3>
        //                 <p className="md:h-[24px]">Delicious 🔥</p>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <div className="mt-[132px]">
            <h2 className="sr-only">Steps</h2>

            <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
                <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
                    <li className="relative flex justify-start text-blue-600">
                        <span className="absolute -bottom-[1.75rem] start-0 rounded-full bg-blue-600 text-white">
                            <svg
                                className="size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>

                        {/* <span className="hidden sm:block"> Details </span> */}

                        {/* <svg
                            className="size-6 sm:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                        </svg> */}
                    </li>

                    <li className="relative flex justify-center text-blue-600">
                        <span
                            className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white"
                        >
                            <svg
                                className="size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>

                        {/* <span className="hidden sm:block"> Address </span> */}

                        {/* <svg
                            className="mx-auto size-6 sm:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg> */}
                    </li>

                    <li className="relative flex justify-end">
                        <span className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white">
                            <svg
                                className="size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>

                        {/* <span className="hidden sm:block"> Payment </span> */}

                        {/* <svg
                            className="size-6 sm:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg> */}
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default GeneralPost;