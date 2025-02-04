/* eslint-disable react/prop-types */
const Tag = ({ tag }) => {
  return (
    <div className="text-[#344054] bg-[#F2F4F7] rounded-2xl w-[88px] text-center ">
      <h2 className="py-[1.6px] px2 text-[14.35px] leading-[23.31px] tracking-[0.287px] ">
        {tag}
      </h2>
    </div>
  );
};

export default Tag;
