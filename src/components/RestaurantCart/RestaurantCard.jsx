import imgOne from './images/a0b98154abf798939f17b29dc2fcb40e.jpeg'
import iconOne from './images/Frame.svg'
const RestaurantCard = () => {
    return (
        // <div className='h-[261px] w-[203px]  p-2 shadow-custom'>
        <div className='h-auto w-auto p-2 shadow-custom'>
            <img src={imgOne} className='rounded' alt="" />
            <h3 className='text-[#161616] font-medium text-base overflow-hidden'>Farmers Food</h3>
            <div className='flex justify-start gap-3 my-2'>
                <img src={iconOne} alt="" />
                <h1 className='text-xs text-[#585858]'>123 People follow them</h1>
            </div>
            <button className='text-white text-sm md:text-base font-normal md:font-medium rounded-[50px] w-full py-2 px-4' style={{ background: 'linear-gradient(132deg, #FFB800 -9.44%, #FF7A00 120.44%)' }}>Follow</button>
            <button className='text-[#161616] text-xs md:text-base w-full border-[#FFB800] py-2 px-4 rounded-[50px] bg-white border mt-2'>View Profile</button>
        </div>
    );
};

export default RestaurantCard;