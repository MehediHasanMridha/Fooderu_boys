/* eslint-disable react/prop-types */
const variants = {
  primary:
    "text-white text-[14px] leading-[22px] bg-gradient-to-r from-[#FFB800] to-[#FF7A00]",
  outline: "text-[#161616] text-[12px] border border-[#FFB800]",
  outlineSecondary: "text-[16px] text-[#585858] border border-[#D2D2D2]",
};

// TODO: Need to think of responsiveness, onClick functions
const Button = ({ children, variant, className }) => {
  return (
    <button
      className={`w-auto h-[32px] px-4 py-2 flex justify-center items-center rounded-[50px] font-inter cursor-pointer ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
