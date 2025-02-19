import FilterInputField from "../../../ui/filter-input-field";

const Filter = () => {
  return (
    <div className="m-2 p-2 md:p-4 space-y-2 rounded-[8px] bg-white shadow-md">
      <h5 className="text-[#585858] text-[14px] font-inter leading-[22px]">
        Filter restaurant by
      </h5>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <FilterInputField type="text" placeholder="Item" />
        <FilterInputField type="text" placeholder="Place" />
        <FilterInputField type="text" placeholder="Price" />
        <FilterInputField type="text" placeholder="Rating" />
      </div>
    </div>
  );
};

export default Filter;
