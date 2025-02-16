import Card from "../../ui/card";
import Filter from "./filter";

import kacchiBhaiIcon from "../../assets/Kacchi_bhai.jpg";
import icon from "../../assets/human_icon.svg";

const Restaurant = () => {
  return (
    <div className=" w-[430px] mx-auto">
      <Filter />
      <div className="m-2 grid grid-cols-2 gap-2">
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
        <Card
          img={kacchiBhaiIcon}
          title="Kacci Bhai"
          icon={icon}
          followers="123"
        />
      </div>
    </div>
  );
};

export default Restaurant;
