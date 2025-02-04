import Card from "./components/ui/Card";
import Title from "./components/ui/Title";

const App = () => {
  return (
    <div className="w-[1920px] ">
      <Title
        title1={"OUR PORTFOLIO"}
        title2={
          "User-centered design encourages productivity and boosts revenue"
        }
      />
      <div className="px-[160px] mt-[84px]">
        {[1, 3, 5].map((id) => (
          <div
            key={id}
            className="h-[817px] mb-[48px] flex justify-between gap-[46px]"
          >
            <Card id={id} />
            <Card id={id + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
