import StoryCard from "../storyCard/Index";

import firstStory from "../assets/first_story.jpg";
import secondStory from "../assets/second_story.jpg";
import thirdStory from "../assets/third_story.jpg";

const Stories = () => {
  return (
    <div className="my-4 ml-2 flex items-center gap-2">
      <StoryCard img={firstStory} />
      <StoryCard img={secondStory} />
      <StoryCard img={thirdStory} />
    </div>
  );
};

export default Stories;
