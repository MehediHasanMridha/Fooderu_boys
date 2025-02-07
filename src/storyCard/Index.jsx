// eslint-disable-next-line react/prop-types
const StoryCard = ({ img }) => {
  return (
    <div
      className="w-[128px] h-[173.18px] rounded-[8px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundColor: "#D9D9D9",
      }}
    ></div>
  );
};

export default StoryCard;
