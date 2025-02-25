import StoryCard from "../storyCard/Index";

import storyPic from "../assets/storyPic.jpg";

const Stories = () => {
  return (
    <div className="my-4 ml-2 flex items-center justify-center gap-2 md:my-8 md:ml-4 md:gap-3 2xl:ml-3">
      <StoryCard img={storyPic} />
      <StoryCard img={storyPic} />
      <StoryCard img={storyPic} />
      <StoryCard img={storyPic} />
      <StoryCard img={storyPic} />
    </div>
  );
};

export default Stories;
