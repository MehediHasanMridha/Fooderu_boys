// import { BsThreeDots } from "react-icons/bs";
// import { RxCross2 } from "react-icons/rx";
// import { TbArrowWaveRightUp } from "react-icons/tb";
// import Rating from "react-rating";
// // extra start
import image1 from '../../public/Image/Rectangle 11.png'

// extra end

const GeneralPost = () => {

    return (
        <div className="container p-4 mx-auto">
            <div className="md:w-[816px] md:h-[48px] my-2 gap-1 flex mx-auto">
                <div>
                    <img className="md:w-12 md:h-12 rounded-lg" src="/public/images/Rectangle 130.jpg" alt="" />
                </div>
                <div className="md:w-[568px] md:h-12 w-[232px]">
                    <h1 className="text-black font-semibold">Laziz Biriyani House</h1>
                    <p className="text-[#585858]">2:30 | 23 apr 2024</p>
                </div>
                <div className="md:h-9 md:w-[106px] md:mr-4 w-[78px] h-[27px] ">
                    <button className="btn bg-[#FFB800] rounded-full md:font-semibold text-white w-full">Follow</button>
                </div>
                <div className="flex md:ml-1 items-center my-auto justify-between gap-1 md:w-[56px] md:h-6">
                    {/* <button className="w-6 h-6"><BsThreeDots className="text-xl" /></button> */}
                    {/* <button className="w-6 h-6 md:visible"><RxCross2 className="text-xl" /></button> */}
                </div>

            </div>
            {/* post paragraph */}
            <div className="md:w-[816px] mx-auto md:h-[72px] mb-2">
                <p className="md:text-[16px] text-[#161616]">Chicken biryani is a quintessential South Asian dish known for its rich flavors and aromatic spices. Tender pieces of chicken are marinated in a blend of yogurt and spices, then layered with fragrant basmati rice infused with saffron, caramelized onions, and a medley of spices like.</p>
            </div>

            {/* imgage of the post */}
            <div>
                <img className="mx-auto md:w-[816px] rounded-lg md:h-[530px] flex justify-center items-center" src={image1} alt="" />
                <div className=" mt-1 flex items-center mx-auto md:w-[816px] md:h-[22px]">
                    <div className="md:w-[177px] flex gap-1 items-center my-auto md:h-[22px]">
                        <div className=""><img className="h-4 w-4" src="/public/images/Vector.jpg" alt="" /></div>
                        <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">4.5 Out of 50 members</p>
                    </div>
                    <div className="md:w-[115px] flex gap-1 items-center my-auto md:h-[22px]">
                        <div className=""><img className="h-4 w-5" src="/public/images/Vector (1).jpg" alt="" /></div>
                        <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">14 Comments</p>
                    </div>
                    <div className="md:w-[72px] flex gap-1 items-center my-auto md:h-[22px]">
                        <div className=""><img className="h-5 w-5" src="/public/images/Frame.jpg" alt="" /></div>
                        <p className=" text-xs font-semibold text-[#585858] flex items-center justify-center">Tangail</p>
                    </div>
                </div>
            </div>
            {/* see direction */}
            <div className="mt-2 flex justify-between my-auto items-center mx-auto md:w-[816px] md:h-[40px]">
                <div className="bg-[#F6F6F6] rounded-3xl">
                    {/* <Rating
                        style={{ maxWidth: 180 }}
                        value={3}
                        readOnly
                    /> */}
                </div>
                <div>
                    {/* <button className="btn bg-[#FFB800] md:  rounded-full md:text-[16px] text-white w-full"> <span className="md:w-[101px]">See Direction</span> <TbArrowWaveRightUp /> */}
                    {/* </button> */}
                </div>
            </div>
            {/* comment section */}
            <div className="md:w-[816px] md:h-[40px] flex gap-2  mx-auto my-3">
                <div className="md:h-[40px] md:w-[40px]">
                    <img src="/public/images/Ellipse 1.jpg" alt="" />
                </div>
                {/* input field */}
                <div className="md:w-[760px] w-[374px] h-[32px] md:h-[40px]">
                        <input className="border relative border-black rounded-3xl w-full md:w-[760px] md:h-[40px] p-2" placeholder="Write your comment" type="text" />
                        {/* submit comment button */}
                        <button className="relative -top-8 left-[300px] md:left-[720px] md:-top-3/4"><img className="" src="/public/images/Vector (2).jpg" alt="" /></button>
                </div>

            </div>
            {/* all comments part */}
            <div className="md:w-[816px] grid grid-cols-1 gap-4 mx-auto my-4">
                {/* 1st comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Hakim Badshah</h3>
                        <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
                    </div>
                </div>
                {/* 2nd comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Mellano Lee</h3>
                        <p className="md:h-[24px]">This chicken biriyani is awesome. 🫰 </p>
                    </div>
                </div>
                {/* 3rd comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Hakim Badshah</h3>
                        <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
                    </div>
                </div>
                {/* 4th comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Mellano Lee</h3>
                        <p className="md:h-[24px]">This chicken biriyani is awesome. 🫰 </p>
                    </div>
                </div>
                {/* 5th comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Carolaina Prostenco</h3>
                        <p className="md:h-[24px]"> Delicious 🔥 </p>
                    </div>
                </div>
                {/* 6th comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Hakim Badshah</h3>
                        <p className="md:h-[24px]">Their foods are very delicious. Must try 😍 </p>
                    </div>
                </div>
                {/* 7th comment */}
                <div className="md:w-[816px] md:h-[63px] flex gap-1">
                    <div><img src="/public/images/first-comment.jpg" alt="" /></div>
                    <div className="md:w-auto bg-[#F6F6F6] md:h-[63px] p-2 rounded-xl">
                        {/* user name */}
                        <h3 className="font-semibold">Carolaina Prostenco</h3>
                        <p className="md:h-[24px]">Delicious 🔥</p>
                    </div>
                </div>

            </div>
        </div>
       
    );
};

export default GeneralPost;