/* eslint-disable react/prop-types */
const Title = ({ title1, title2 }) => {
  return (
    <div className="pl-[160px] ">
      {title1 && (
        <h2 className="text-[#852EFF] text-2xl font-normal leading-[47px] tracking-[0.48px] ">
          {title1}
        </h2>
      )}

      {title2 && (
        <p className="text-[#040633] text-[80px] font-medium leading-[106px] w-[1027px] ">
          {title2}
        </p>
      )}
    </div>
  );
};

export default Title;
