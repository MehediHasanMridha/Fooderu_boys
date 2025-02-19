// eslint-disable-next-line react/prop-types
const StoryCard = ({ img }) => {
    return (
      <div
        className="relative w-[128px] h-[173.18px] rounded-[8px] bg-cover bg-center bg-no-repeat flex flex-col justify-end p-2 2xl:w-[170px] 2xl:h-[230px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* Dark Gradient Overlay at the Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-[8px]"></div>
  
        {/* Text element */}
        <div className="relative z-10 text-white font-inter">
          <p className="truncate text-[14px] 2xl:text-[18px] 2xl:font-medium 2xl:leading-[30px]">
            Special salad vegetable
          </p>
          <p className="truncate text-[12px]">Blue Chines House</p>
        </div>
      </div>
    );
  };
  
  export default StoryCard;