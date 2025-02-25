/* eslint-disable react/prop-types */
const Title = ({ title, className }) => {
  return (
    <div className={`text-[#585858] text-[16px] font-inter ${className}`}>
      {title}
    </div>
  );
};

export default Title;
