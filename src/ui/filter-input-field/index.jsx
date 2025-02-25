/* eslint-disable react/prop-types */
const FilterInputField = ({ type, placeholder, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full h-8 px-4 py-2 border border-[#D2D2D2] rounded-[100px] text-[12px] font-inter ${className}`}
    />
  );
};

export default FilterInputField;
